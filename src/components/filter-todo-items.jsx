import React from "react";
import { SHOW_ALL, SHOW_NOT_COMPLETED, SHOW_COMPLETED } from "../constants";
import { setFilter } from "../redux/actions";
import { connect } from "react-redux";

function FilterTodoItems({ setFilter }) {
  return (
    <select
      onChange={e => {
        setFilter(e.target.value);
      }}
    >
      <option value={SHOW_ALL}>All</option>
      <option value={SHOW_COMPLETED}>Completed</option>
      <option value={SHOW_NOT_COMPLETED}>Not yet complete</option>
    </select>
  );
}

export default connect(null, { setFilter })(FilterTodoItems);
