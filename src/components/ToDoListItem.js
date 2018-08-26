
import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;
    return (
      <div key="toDoName" className="item">
          <p>
            {todo.title}{" "}
          </p>
          <button
            onClick={() => this.handleCompleteClick(todoId)}
            className="button button--add"
          >
            &#x2715;
          </button>
      </div>
    );
  }
}

export default connect(null, { completeToDo })(ToDoListItem);