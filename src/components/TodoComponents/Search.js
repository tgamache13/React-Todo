import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }
    

    handleChange = event => {
        const value = event.target.value;
        this.setState({todo: value});
        this.props.searchFilter(value)
    }

    render(){
        return(
            <div>
                <form>
                    <label>Search To Do List:</label>
                     <input type='text' placeholder='Enter To Do' value={this.state.todo} onChange={this.handleChange} />
                    
                </form>
            </div>

        );
    }
}

export default Search;