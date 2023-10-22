import { createSlice } from "@reduxjs/toolkit";
import anecdoteServices from "../services/anecdoteServices";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    newAnecdote(state, action) {
      state.push(action.payload);
    },
    Voting(state, action) {
      const id = action.payload;
      const anecdote = state.find((n) => n.id == id);
      const theAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      return state.map((anec) => (anec.id === id ? theAnecdote : anec));
    },
    displayAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const { newAnecdote, Voting, displayAnecdote } = anecdoteSlice.actions;

export const intiializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll();
    dispatch(displayAnecdote(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const created = await anecdoteServices.createAnecdote(content);
    dispatch(newAnecdote(created));
  };
};

export default anecdoteSlice.reducer;
