import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToDoList />
      </div>
    );
  }
}

export default App;