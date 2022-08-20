import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
  const onClickButton = (msg) => alert(msg);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Here the modal should be opened')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
