import React from 'react';

import './todo-title.css'

const TodoTitle = ({toDo, done}) => {
    return (
    <div className="todo-title">
      <h1> Todo List </h1>
      <h2>{toDo} more to do, {done} done</h2>     
    </div>
    );
  };

export default TodoTitle;