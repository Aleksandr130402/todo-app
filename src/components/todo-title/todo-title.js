import React from 'react';
import ReactDOM from 'react-dom';

import './todo-title.css'



const TodoTitle = () => {
    return (
    <div className="todo-title">
      <h1> Todo List </h1>
      <p className="todo-list-state">1 more to do, 3 done</p>     
    </div>
    );
  };

export default TodoTitle;