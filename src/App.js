import React, {Component} from 'react';
import './App.css';

import Todos from "./components/Todos";
import Header from "./components/Header";

class App extends Component {

  state = {

    myTodos : [{
      id: 1,
      title: "write an app",
      completed: false
    },
    {
      id: 2,
      title: "learn blabla",
      completed: false
    },
    {
      id: 3,
      title: "React tasks",
      completed: false
    },
  
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <div style={todosy}>
        <Todos myTodos={this.state.myTodos} todoCompleted={this.todoCompleted} />
        </div>
      </div>
    );
  }
}

const todosy = {
  padding: "0.8em"
}


export default App;



