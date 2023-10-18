import AnecdotesForm from "./components/AnecdotesForm";
import Anecdotes from "./components/AnecdotesList";

const App = () => {
  return (
    <div>
      <Anecdotes />

      <AnecdotesForm />
    </div>
  );
};

export default App;
