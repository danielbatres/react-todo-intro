import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h2 className="TodoCounter">
      You have completed {completedTodos}/{totalTodos} TODOs
    </h2>
  );
};

export { TodoCounter };
