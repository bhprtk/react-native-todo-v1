import { combineReducers } from 'redux';

import currentUser from './currentUserReducer';
import selectedDay from './selectedDayReducer';
import selectedDayTodos from './selectedDayTodosReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
	currentUser,
	selectedDay,
	selectedDayTodos,
	todos
})

export default rootReducer;
