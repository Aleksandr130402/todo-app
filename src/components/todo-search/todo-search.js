import React, { Component } from 'react';

import './todo-search.css';
 
class TodoSearch extends Component {

  state = {
    searchValue: ''
  }

  onShow = (e) => {
    this.setState({
      searchValue: e.target.value
    });  
  };

  componentDidUpdate() {
    this.props.showItem(this.state.searchValue);
  };

    render() {
      return (
      <div >
        <input type="text" 
        className="todo-search" 
        placeholder="search"
        onChange={this.onShow}
        value={this.state.searchValue}></input>
      </div>
      );
    };  
};

export default TodoSearch;