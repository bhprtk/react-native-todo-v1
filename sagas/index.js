import { fork } from 'redux-saga/effects';
import addTodo from './addTodoSaga';
import deleteTodo from './deleteTodoSaga';
import editTodo from './editTodoSaga';
import getSelectedDayTodos from './getSelectedDayTodosSaga';
import toggleCheckbox from './toggleCheckboxSaga';

export default function* root() {
	yield fork(addTodo().watcher);
	yield fork(deleteTodo().watcher);
	yield fork(editTodo().watcher);
	yield fork(getSelectedDayTodos().watcher);
	yield fork(toggleCheckbox().watcher);
}
