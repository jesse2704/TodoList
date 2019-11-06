import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';


import './App.css';

function App() {
  const [state, setState] = useState({
     todos: [
      {
      id: 1,
      title: 'Take out the trash',
      completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
        },
        {
          id: 3,
          title: 'Meeting with boss',
          completed: false
          }
    ]
  }) 
  // Toggle Complete
  const markComplete = (id) => {
    setState({ todos: state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  const delTodo = (id) => {
    setState({ todos: [...state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    setState({ todos: [...state.todos, newTodo]});
  }

  return (
    <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
            <React.Fragment>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={state.todos} markComplete={markComplete} delTodo={delTodo} />
            </React.Fragment>)} />
         </div>
         <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
