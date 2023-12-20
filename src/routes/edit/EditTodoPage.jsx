import React from 'react'
import { TodoForm } from '../../components/TodoForm';
import { useTodos } from '../../hooks/useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);
  const { stateUpdaters: { editTodo } } = useTodos();

  return (
    <TodoForm 
      label="Edit TODO"
      submitText="Edit"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };