import { useDispatch, useSelector } from "react-redux";
import { Voting } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdoteServices";
const Anecdotes = () => {
  const anecdotess = useSelector((state) => {
    const x = new RegExp(state.filter, "i");
    return state.anecdotes.filter((anecdote) => anecdote.content.match(x));
  });
  const dispatch = useDispatch();

  const vote = async (anecdote) => {
    dispatch(Voting(anecdote.id));
    await anecdoteService.voteInc(anecdote);
    dispatch(setNotification(`You voted for ${anecdote.content}`, 3));
  };

  return (
    <div>
      {anecdotess
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Anecdotes;
