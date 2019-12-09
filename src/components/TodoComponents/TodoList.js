// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import ToDo from './Todo';

class ToDoList extends React.Component {
    

    render() {
        return (
            <div class="container">
                <div class='alert  col-sm-4'>
                {this.props.toDoList.filter(todo => {
                    return todo.task.includes(this.props.filter);
                }).map(todo => {
                    return <ToDo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />
                })}
                </div>
            </div>
        );
    }
}

export default ToDoList;