import React, {Component} from 'react';

import './todo-add-item.css'

export default class TodoAddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
    
        this.setState({
            label: e.target.value
        });
          
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

       return (
        <form className="todo-add-item d-flex"
        onSubmit={this.onSubmit}>
            <input type="text"
            className="form-control" 
            onChange={this.onLabelChange} 
            placeholder="Write new task"
            value={this.state.label}/>
            <button className="btn btn-primary">Add</button>
        </form>
        ); 
    } 
};