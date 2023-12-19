import React from 'react'
import { TodoForm } from '../../components/TodoForm';

function EditTodoPage() {
  return (
    <TodoForm 
      label="Edit TODO"
      submitText="Edit"
      submitEvent={() => console.log("Edit todo")}
    /> 
  );
}

export { EditTodoPage };