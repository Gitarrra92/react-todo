import React, {Component} from 'react';
import './App.css';

import uuid from "uuid";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Start from "./components/Start";

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
      <Router>
        <div className="App">
          <Route path="/" component={Start}>
            <Start />
          </Route>
          <Route path="/todo" render={props => (
            <React.Fragment>
              <header className="App-header">
              <Header />
              </header>
              <AddTodo addTodo={this.addTodo}/>
              <div style={todosy}>
              <Todos myTodos={this.state.myTodos} todoCompleted={this.todoCompleted} deleteButton={this.deleteButton}/>
              </div>
            </React.Fragment>
          )}></Route>
        </div>
      </Router>
    );
  }
}

const todosy = {
  padding: "0.8em"
}


export default App;



