import React from 'react'
import { TodoForm } from '../../components/TodoForm';
import { useTodos } from '../../hooks/useTodos';
import { useParams, useLocation } from 'react-router-dom';

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);
  const { 
    state: { loading, getTodo },
    stateUpdaters: { editTodo }
  } = useTodos();

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Loading...</p>
  } else {
    todoText = getTodo(id).text;
  }

  return (
    <TodoForm
      label="Edit TODO"
      defaultTodoText={todoText}
      submitText="Edit"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };