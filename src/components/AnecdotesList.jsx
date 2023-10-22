import { useDispatch, useSelector } from "react-redux";
import { Voting } from "../reducers/anecdoteReducer";
import {
  removeNotification,
  setNotification,
} from "../reducers/notificationReducer";

const Anecdotes = () => {
  const anecdotess = useSelector((state) => {
    const x = new RegExp(state.filter, "i");
    return state.anecdotes.filter((anecdote) => anecdote.content.match(x));
  });
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(Voting(id));
    dispatch(setNotification(`You voted for ${content}`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
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
              <button onClick={() => vote(anecdote.id, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Anecdotes;
