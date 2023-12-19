import React from "react";
import { TodoForm } from "../../components/TodoForm";

function NewTodoPage() {
  return (
    <TodoForm 
      label="Enter a new TODO"
      submitText="Add"
      submitEvent={() => console.log("Add todo")}
    /> 
  );
}

export { NewTodoPage };
