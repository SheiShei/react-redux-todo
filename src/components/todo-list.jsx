import React from "react";
import _ from "lodash";

import TodoItem from "./todo-item";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from "../constants";
import { connect } from "react-redux";

function TodoList({ todos, visibilityFilter }) {
  const todoList = _.reduce(
    todos,
    (t, todo, i) => {
      const filter = visibilityFilter;
      if (
        filter === SHOW_ALL ||
        (filter === SHOW_COMPLETED && todo.isCompleted) ||
        (filter === SHOW_NOT_COMPLETED && !todo.isCompleted)
      ) {
        t.push(<TodoItem key={i} i={i} {...todo} />);
      }
      return t;
    },
    []
  );

  return <ul>{todoList}</ul>;
}
const mapStateToProps = state => ({
	todos: state.todos,
	visibilityFilter: state.visibilityFilter
});
export default connect(mapStateToProps)(TodoList);
