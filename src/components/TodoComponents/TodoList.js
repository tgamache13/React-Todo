// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import ToDo from './Todo';

class ToDoList extends React.Component {
    constructor(){
        super();

    }

    render() {
        return (
            <div>
                {this.props.toDoList.map(todo => {
                    return <ToDo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />
                })}
            </div>
        );
    }
}

export default ToDoList;