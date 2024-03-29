import React from "react";
import { useNavigate } from 'react-router-dom';
import { useTodos } from "../../hooks/useTodos";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { TodoHeader } from "../../components/TodoHeader";
import { TodosError } from "../../components/TodosError";
import { TodosLoading } from "../../components/TodosLoading";
import { EmptyTodos } from "../../components/EmptyTodos";
import { ChangeAlert } from "../../components/ChangeAlert";

function HomePage() {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const {
    setSearchValue,
    sincronizeTodos,
    completeTodo,
    deleteTodo,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>There is no results for {searchText}</p>
        )}
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              navigate(`/edit/${todo.id}`, { state: { todo } });
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>
      <CreateTodoButton 
        onClick={() => navigate("/new")}
      />
      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
