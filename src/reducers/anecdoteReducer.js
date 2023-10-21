import { createSlice } from "@reduxjs/toolkit";

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
export default anecdoteSlice.reducer;
