import React from 'react';


class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    handleChange = event => {
        this.setState({
            todo: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.addToDo(this.state.todo);
        event.preventDefault();
    }
    

    render() {
        return ( 
            <div class="container" >
                <form  class = "form-column" role = "form" onSubmit = {this.handleSubmit} >
                    <div class = "form-group" >
                        <div class = "col-sm-4" >
                            <input type = "text" class = "form-control input-sm" placeholder = "Enter ToDo Here" value = {this.state.todo} onChange = {this.handleChange}/> 
                            <button type='submit' > Add ToDo </button> 
                            <button type='button' onClick={() => this.props.clearCompleted()}> Clear Completed </button>
                            
                        </div> 
                    </div> 
                </form> 
            </div>
        );
    }
}

export default ToDoForm;