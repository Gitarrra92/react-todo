import React, {Component} from 'react';
import Todo from "./Todo";

class Todos extends Component {
   render() {
       return this.props.myTodos.map(todo => (
        <Todo key={todo.id} todo={todo} todoCompleted={this.props.todoCompleted} deleteButton={this.props.deleteButton} />
       ));
   } 
  }

export default Todos;