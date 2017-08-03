import { createTypes } from 'reduxsauce';

export default createTypes(`
	ADD_TODO
	DELETE_TODO
	EDIT_TODO
	GET_SELECTED_DAY_TODOS
	ON_CHANGE_TODOS
	RESET_SELECT_DAY
	SELECT_DAY
	SELECTED_DAY_TODOS
	TOGGLE_CHECKBOX
`)