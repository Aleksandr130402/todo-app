import React from 'react';


import './todo-list-item.css';

const TodoListItem = ({label, 
                    onDeleted, 
                    onToggleImportant, 
                    onToggleDone, 
                    done,
                    important
                    }) => {

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }
        
        if(important) {
            classNames += " important";
        }

    return (
        <span className={ classNames }>
            <span className="todo-list-item-label" 
            onClick={ onToggleDone } >
            { label }
            </span>

            <button type="button" className="btn btn-outline-success" onClick={ onToggleImportant }><i className="fas fa-exclamation"></i></button>
            <button type="button" className="btn btn-outline-danger" onClick={ onDeleted } ><i className="fas fa-trash"></i></button>
        </span> 
    );
}

export default TodoListItem;