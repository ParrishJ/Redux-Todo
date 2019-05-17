import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { addItem } from "../Actions";
import { toggleComplete } from "../Actions";
import "./ItemList.css";

class ItemList extends React.Component {
  state = {
    newItem: ""
  };

  addItems = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  toggleComplete = id => {
    this.props.toggleComplete(id);
  };

  handleChanges = e => this.setState({ newItem: e.target.value });

  render() {
    return (
      <div>
        <h1>To Do: </h1>
        {this.props.todos.map(item => (
          <h2
            className={`${item.completed ? " completed" : ""}`}
            onClick={() => this.toggleComplete(item.id)}
            key={item.id}
          >
            {item.name}
            {item.completed}
          </h2>
        ))}
        <input onChange={this.handleChanges} value={this.state.newItem} />
        <button onClick={this.addItems}>Add Todo...</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addItem, toggleComplete }
)(ItemList);
