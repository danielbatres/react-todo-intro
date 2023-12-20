import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../hooks/useTodos";

function NewTodoPage() {
  const {
    stateUpdaters: { addTodo },
  } = useTodos();

  return (
    <TodoForm 
      label="Enter a new TODO"
      submitText="Add"
      submitEvent={(text) => addTodo(text)}
    /> 
  );
}

export { NewTodoPage };
