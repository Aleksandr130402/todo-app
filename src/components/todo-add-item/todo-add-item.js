import React, {Component} from 'react';

import './todo-add-item.css'

export default class TodoAddItem extends Component {



    render() {

       return (
        <div className="todo-add-item">
            <button className="btn btn-primary" onClick={ () => this.props.addItem("Hello") }>Add new item</button>
        </div>
        ); 
    } 
};