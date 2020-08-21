import React, { Component } from 'react';


import TodoTitle from '../todo-title';
import TodoSearch from '../todo-search';
import TodoList from '../todo-list';
import TodoSearchBtn from '../todo-search-btn';
import './app.css';
import TodoAddItem from '../todo-add-item';

export default class App extends Component {

  itemId = 100;

  state = {
    todoData: [
      this.createTodoItem('Write Awesome App'),
      this.createTodoItem('Drink Tea'),
      this.createTodoItem('Drink Coffee')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.itemId++  
    };
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id); 

        const newArray = [
          ...todoData.slice(0,idx),
          ...todoData.slice(idx + 1)
        ];

        return {
          todoData: newArray
        }
    })
  };

  addItem = (text) => {

    const newItem = this.createTodoItem(text);
      
    this.setState(({ todoData }) => {

      const newArr = [
        ...todoData, 
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };



  showItem = (searchValue) => {
    
  }

  toggleProperty(arr, id, propName) {

      const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx]

      const newItem = { ...oldItem, 
        [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ]
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
  
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
  
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount ;

    return (
      <div className="todo-app">
        <TodoTitle toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <TodoSearch showItem={ this.showItem }/>
          <TodoSearchBtn/>
        </div>
        <TodoList todos={todoData} 
        onDeleted={ this.deleteItem }
        onToggleImportant={ this.onToggleImportant }
        onToggleDone={ this.onToggleDone }
        done={this.state.done}
        important={this.state.important}/>
        <TodoAddItem addItem={ this.addItem }/>
      </div>
    );
  }
}