import React from "react";
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";

function TodoItem({ text, isCompleted, i, toggleTodo }) {
  return (
    <li
      onClick={() => {
        toggleTodo(i);
      }}
      className={isCompleted ? "blue completed" : "red"}
    >
      {text}
    </li>
  );
}

export default connect(null, { toggleTodo })(TodoItem);
