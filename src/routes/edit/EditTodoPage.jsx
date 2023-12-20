import React from 'react'
import { TodoForm } from '../../components/TodoForm';
import { useTodos } from '../../hooks/useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);
  const { 
    state: { loading, getTodo },
    stateUpdaters: { editTodo }
  } = useTodos();

  if (loading) {
    return <p>Loading...</p>
  } else {
    const todo = getTodo(id);

    return (
      <TodoForm
        label="Edit TODO"
        defaultTodoText={todo.text}
        submitText="Edit"
        submitEvent={(newText) => editTodo(id, newText)}
      />
    );
  }
}

export { EditTodoPage };