import { useEffect } from "react";
import AnecdotesForm from "./components/AnecdotesForm";
import Anecdotes from "./components/AnecdotesList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { intiializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intiializeAnecdotes());
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <Anecdotes />
      <AnecdotesForm />
    </div>
  );
};

export default App;
