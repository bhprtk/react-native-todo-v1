import { fork } from 'redux-saga/effects';
import addTodo from './addTodoSaga';
import deleteTodo from './deleteTodoSaga';
import editTodo from './editTodoSaga';
import facebookLogin from './facebookLoginSaga';
import logout from './logoutSaga';
import getCurrentUser from './getCurrentUserSaga';
import getSelectedDayTodos from './getSelectedDayTodosSaga';
import googleLogin from './googleLoginSaga';
import toggleCheckbox from './toggleCheckboxSaga';

export default function* root() {
	yield fork(addTodo().watcher);
	yield fork(deleteTodo().watcher);
	yield fork(editTodo().watcher);
	yield fork(facebookLogin().watcher);
	yield fork(logout().watcher);
	yield fork(getCurrentUser().watcher);
	yield fork(getSelectedDayTodos().watcher);
	yield fork(googleLogin().watcher);
	yield fork(toggleCheckbox().watcher);
}
