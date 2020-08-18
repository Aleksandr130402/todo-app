import React from 'react';
import ReactDOM from 'react-dom';

import TodoTitle from '../todo-title';
import TodoSearch from '../todo-search';
import TodoList from '../todo-list';
import './app.css';

const App = () => {
    return (
    <div className="todo-app">
      <TodoTitle/>
      <TodoSearch/>
      <TodoList/>
    </div>
    );
  };

  export default App;
