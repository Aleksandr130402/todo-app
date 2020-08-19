import React, {Component} from 'react';

import './todo-search-btn.css';

export default class TodoSearchBtn extends Component {
    render() {
        return (
        <div className="todo-search-btn">
            <button className="btn btn-info active" onClick>All</button>
            <button className="btn btn-outline-secondary" onClick>Active</button>
            <button className="btn btn-outline-secondary" onClick>Done</button>
        </div>       
        );
    };
};