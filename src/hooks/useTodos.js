import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useTodos = () => {
  const {
    item: todos,
    saveItems: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const id = newTodoId(todos);

    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
      id,
    });

    saveTodos(newTodos);
  };

  const getTodoIndex = (id) => {
    return todos.findIndex(todo => todo.id === id);
  }

  const getTodo = (id) => {
    return todos[getTodoIndex(id)];
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[getTodoIndex(id)].completed = true;

    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    newTodos[getTodoIndex(id)].text = newText;

    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(getTodoIndex(id), 1);

    saveTodos(newTodos);
  };

  const state = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    getTodo,
  };

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
    sincronizeTodos,
  };

  return { state, stateUpdaters };
};

function newTodoId(todoList) {
  if (!todoList.length) return 1;

  const idList = todoList.map(todo => todo.id);

  return Math.max(...idList) + 1;
}

export { useTodos };
