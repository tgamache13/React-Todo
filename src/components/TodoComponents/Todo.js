import React from 'react';

class ToDo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <p onClick={() => this.props.toggleCompleted(this.props.todo.id)} style={{textDecoration: this.props.todo.completed && 'line-through'}}>{this.props.todo.task}</p>
        );
    }
}

export default ToDo;