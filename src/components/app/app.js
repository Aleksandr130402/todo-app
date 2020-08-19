import React, { Component } from 'react';


import TodoTitle from '../todo-title';
import TodoSearch from '../todo-search';
import TodoList from '../todo-list';
import TodoSearchBtn from '../todo-search-btn';
import './app.css';

export default class App extends Component {

  state = {
    todoData: [
    {label: "Write Awesome App", important: true, id: 1},
    {label: "Drink tea", important: false, id: 2},
    {label: "Have a lunch", important: false, id: 3}
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id); 
        todoData.splice(idx, 1);

        return {
          todoData: todoData
        }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <TodoTitle />
        <TodoSearch/>
        <TodoSearchBtn/>
        <TodoList todos={this.state.todoData} onDeleted={ this.deleteItem}/>
      </div>
      );
  }
}