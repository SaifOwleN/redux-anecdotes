import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createNew = async (content) => {
  const anecdote = { content, votes: 0 };
  const res = await axios.post(baseUrl, anecdote);
  return res.data;
};

const voteInc = async (anecdote) => {
  const votes = anecdote.votes + 1;
  const anec = { ...anecdote, votes };
  const res = await axios.put(`${baseUrl}/${anecdote.id}`, anec);
};

export default { getAll, createNew, voteInc };
