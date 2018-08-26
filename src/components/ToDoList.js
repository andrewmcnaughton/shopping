
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ToDoListItem from "./ToDoListItem";

class ToDoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ title: addFormValue });
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state;
    return (
      <div id="todo-add-form" className="col s10 offset-s1">
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-field">
            <p className="add">Add to list</p>
            <input
              value={addFormValue}
              onChange={this.handleInputChange}
              id="toDoNext"
              type="text"
              placeholder="Item Name"
            />
          </div>
        </form>
      </div>
    );
  };

  renderToDos() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="message">
        <h4>No items.</h4>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchToDos();
  }

  render() {
    return (
      <div className="to-do-list-container">
        <h1>Lunch run!</h1>
        <div className="row">
          {this.renderToDos()}
          {this.renderAddForm()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(ToDoList);