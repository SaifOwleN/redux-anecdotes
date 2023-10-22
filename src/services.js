import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = () => axios.get(baseUrl).then((res) => res.data);

export const addAnecdotes = (anecdote) =>
  axios.post(baseUrl, anecdote).then((res) => res.data);

export const voteAnecdotes = (anecdote) =>
  axios.put(`${baseUrl}/${anecdote.id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
