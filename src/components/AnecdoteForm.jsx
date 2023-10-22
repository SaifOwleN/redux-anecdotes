import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAnecdotes } from "../services";
import notiContext from "../NotiContext";
import { useContext } from "react";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const [noti, dispatch] = useContext(notiContext);

  const addAnecdoteMutation = useMutation({
    mutationFn: addAnecdotes,
    onSuccess: () => queryClient.invalidateQueries("anecdotes"),
  });
  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    addAnecdoteMutation.mutate({ content, votes: 0 });
    if (addAnecdoteMutation.status == "success") {
      dispatch({ type: "SET", payload: `anecdote ${content} has been added` });
      setTimeout(() => {
        dispatch({ type: "REMOVE" });
      }, 5000);
    } else {
      dispatch({
        type: "SET",
        payload: `anecdote ${content} is too short (less than 5 char)`,
      });
      setTimeout(() => {
        dispatch({ type: "REMOVE" });
      }, 5000);
    }
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
