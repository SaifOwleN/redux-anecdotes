import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
const AnecdotesForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(newAnecdote(anecdote));
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdotesForm;
