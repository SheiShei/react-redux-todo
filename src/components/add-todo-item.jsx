import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  resetInput = () => {
    this.setState({
      todo: ""
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const newTodo = {
      text: this.state.todo,
      isCompleted: false
    };
    this.props.addTodo(newTodo);
    this.resetInput();
  };

  handleInputChange = event => {
    const todo = event.target.value;
    this.setState({
      todo
    });
  };

  render = () => (
    <form onSubmit={this.handleOnSubmit}>
      <input
        type="text"
        value={this.state.todo}
        onChange={this.handleInputChange}
      />
      <button>Add todo item</button>
    </form>
  );
}

export default connect(null, { addTodo })(AddTodoItem);
