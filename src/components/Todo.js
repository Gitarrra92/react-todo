import React, { Component } from 'react'

export class Todo extends Component {

    todoStyles = () => {
        return {
            backgroundColor: this.props.todo.completed ? "black" :  "white",
            color: this.props.todo.completed ? "white" : "black",
            borderBottom: "1px solid black",
            padding: "0.5em"
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.todoStyles()}>
                <h3>
                    <input type="checkbox" onChange={this.props.todoCompleted.bind(this, id)} placeholder={"write your task"}></input> {" "}
                    {title}
                </h3>
            </div>
        )
    }
}

export default Todo
