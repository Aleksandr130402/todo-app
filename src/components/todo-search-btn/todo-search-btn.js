import React from 'react';

import './todo-search-btn.css'

const TodoSearchBtn = ({showAllItems, showActiveItems, showDoneItems}) => {
  
        return (
        <div className="todo-search-btn">
            <button className="btn btn-info active" onClick={showAllItems}>All</button>
            <button className="btn btn-outline-secondary" onClick={showActiveItems}>Active</button>
            <button className="btn btn-outline-secondary" onClick={showDoneItems}>Done</button>
        </div>       
        );
   
};

export default TodoSearchBtn