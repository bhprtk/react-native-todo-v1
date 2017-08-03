import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { editTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { todo, selectedDay, todoKey } = data;
		editTodo(todo, selectedDay, todoKey);
		yield put(actions.getSelectedDayTodos(selectedDay));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.EDIT_TODO);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}

}
