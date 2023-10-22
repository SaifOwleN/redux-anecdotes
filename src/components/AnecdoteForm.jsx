import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAnecdotes } from "../services";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const addAnecdoteMutation = useMutation({
    mutationFn: addAnecdotes,
    onSuccess: () => queryClient.invalidateQueries("anecdotes"),
  });
  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    addAnecdoteMutation.mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
