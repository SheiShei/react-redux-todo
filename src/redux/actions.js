import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export const addTodo = todo => ({
	type: ADD_TODO,
	payload: { todo }
});

export const toggleTodo = index => ({
	type: TOGGLE_TODO,
	payload: { index }
});

export const setFilter = filter => ({
	type: SET_FILTER,
	payload: { filter }
});
