import React, { Component } from 'react';

import './todo-search.css';
 
export default class TodoSearch extends Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });  
    this.props.onSearchChange(term);
  };

  render() {
    return (
    
      <input type="text" 
      className="todo-search" 
      placeholder="search"
      value={this.state.term}
      onChange={this.onSearchChange}/>
    
    );
  };  
};