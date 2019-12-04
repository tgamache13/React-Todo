import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addToDo = (todo) => {
    this.setState(
      {todos: [...this.state.todos, {
        task: todo,
        id: Date.now(),
        completed: false,
      }]
    });
  }
  toggleCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: true};
      }else{
        return todo;
      }
    })});
  }

  clearCompleted = () => {
    this.setState({todos: this.state.todos.filter(todo => {
      return !todo.completed;
    })});
  }
 
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ToDoList toDoList={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <ToDoForm  addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
