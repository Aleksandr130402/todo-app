import React, {Component} from 'react';


import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    state = {
        done: false,
        important: false
    };
    
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };  
        });
    };

    isImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };
    
    render() {   
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

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
            onClick={ this.onLabelClick } >
            { label }
            </span>

            <button type="button" className="btn btn-outline-success" onClick={this.isImportant}><i className="fas fa-exclamation"></i></button>
            <button type="button" className="btn btn-outline-danger" onClick={ onDeleted } ><i className="fas fa-trash"></i></button>
        </span> 
    );
    };
}