import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { getAnecdotes, voteAnecdotes } from "./services";

const App = () => {
  const queryClient = useQueryClient();

  const updateAnecdoteMutation = useMutation({
    mutationFn: voteAnecdotes,
    onSuccess: () => queryClient.invalidateQueries("anecdotes"),
  });

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate(anecdote);
  };

  const res = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
  });

  if (res.isLoading) {
    return <div>still Loading...</div>;
  }

  if (!res.isSuccess) {
    return <div>Anecdotes failed to load</div>;
  }
  const anecdotes = res.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
