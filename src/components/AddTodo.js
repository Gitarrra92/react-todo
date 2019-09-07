import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: " "
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: " "});
    }

    inputValue = (e) => this.setState({[e.target.name] : e.target.value});
    render() {
        return (
            <form onSubmit={this.formSubmit} style={addTodoStyles}>
                <input type="text" value={this.state.title} onChange={this.inputValue} name="title" placeholder="Write new task..." style={{padding: "5px", width: "100%", outline: "none"}}></input>
                <button type="submit" value="submit" style={{padding: "15px 30px", background: "gold", outline: "none", cursor: "pointer"}}>Add</button>
            </form>
        )
    }
}

const addTodoStyles = {
    padding: "0 0.8em",
    display: "flex",
    flexDirection: "row",
     marginTop: "10px",
     
}

export default AddTodo
