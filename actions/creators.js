import types from './types';

export const addTodo = data => ({
	type: types.ADD_TODO,
	data
})

export const deleteTodo = data => ({
	type: types.DELETE_TODO,
	data
})

export const editTodo = data => ({
	type: types.EDIT_TODO,
	data
})

export const getSelectedDayTodos = selectedDay => ({
	type: types.GET_SELECTED_DAY_TODOS,
	selectedDay
})

export const selectDay = selectedDay => ({
	type: types.SELECT_DAY,
	selectedDay
})

export const selectedDayTodos = todos => ({
	type: types.SELECTED_DAY_TODOS,
	todos
})

export const toggleCheckbox = data => ({
	type: types.TOGGLE_CHECKBOX,
	data
})

export const resetSelectedDay = () => ({
	type: types.RESET_SELECT_DAY
})
