import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { addItem } from "../Actions";

class ItemList extends React.Component {
  state = {
    newItem: ""
  };

  addItems = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
  };

  handleChanges = e => this.setState({ newItem: e.target.value });

  render() {
    return (
      <div>
        <p>To Do: </p>
        {this.props.todos.map(item => (
          <Item item={item} />
        ))}
        <input onChange={this.handleChanges} value={this.state.newItem} />
        <button onClick={this.addItems}>Add ToDo...</button>
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
  { addItem }
)(ItemList);
