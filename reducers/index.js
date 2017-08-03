import { combineReducers } from 'redux';
import selectedDay from './selectedDayReducer';
import selectedDayTodos from './selectedDayTodosReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
	selectedDay,
	selectedDayTodos,
	todos
})

export default rootReducer;
