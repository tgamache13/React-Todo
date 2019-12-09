import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
import Search from './components/TodoComponents/Search';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      
      todos: window.localStorage.getItem('saveState')
      ? JSON.parse(window.localStorage.getItem('saveState')) :[],
      filter: ''
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
  saveToStorage = () =>{
    const saveState = JSON.stringify(this.state.todos);
    localStorage.setItem('saveState', saveState);
  }
  searchFilter = (filter) => {
    this.setState({
      filter: filter
    });
  }
  
  render() {
    return (
      <div class='container'>
        <h2>To Do List</h2>
        <Search searchFilter={this.searchFilter} />
        <ToDoList toDoList={this.state.todos} toggleCompleted={this.toggleCompleted} filter={this.state.filter} />
        <ToDoForm  addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
        <button onClick={this.saveToStorage}>Save</button>
      </div>
    );
  }
}

export default App;
