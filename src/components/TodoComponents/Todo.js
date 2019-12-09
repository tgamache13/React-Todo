import React from 'react';

class ToDo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul class="list-group">
            <li class="list-group-item" onClick={() => this.props.toggleCompleted(this.props.todo.id)} style={{textDecoration: this.props.todo.completed && 'line-through'}}>{this.props.todo.task}</li>
            </ul>
        );
    }
}

export default ToDo;