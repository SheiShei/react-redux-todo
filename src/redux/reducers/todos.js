import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = [
	{
		text: "Eat food",
		isCompleted: true
	},
	{
		text: "Exercise",
		isCompleted: false
	},
	{
		text: "Sleep",
		isCompleted: false
	}
]

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			const { todo } = action.payload;
			let todos = [...state];
			todos.push(todo);
			return todos
		}
		case TOGGLE_TODO: {
			const { index } = action.payload;
			const todos = [...state];
			todos[index].isCompleted = !todos[index].isCompleted;
			return todos;
		}
		default:
			return state;
	}
}
