import React, {Component} from 'react';
import './App.css';
import uuid from "uuid";

import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {

  state = {

    myTodos : [{
      id: uuid.v4(),
      title: "Add your todos",
      completed: false
    },
    {
      id: uuid.v4(),
      title: "Sample task",
      completed: false
    }
  
    ]
  }

  todoCompleted = (id) => {
    this.setState({myTodos: this.state.myTodos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  deleteButton = (id) => {
    this.setState({myTodos: [...this.state.myTodos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({myTodos: [...this.state.myTodos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <AddTodo addTodo={this.addTodo}/>
        <div style={todosy}>
        <Todos myTodos={this.state.myTodos} todoCompleted={this.todoCompleted} deleteButton={this.deleteButton}/>
        </div>
      </div>
    );
  }
}

const todosy = {
  padding: "0.8em"
}


export default App;



