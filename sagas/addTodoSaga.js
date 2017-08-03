import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { addTodo, getSelectedDayTodos } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { selectedDay, todo } = data;
		yield call(addTodo, selectedDay, todo);
		const results = yield call(getSelectedDayTodos, selectedDay)
		yield put(actions.selectedDayTodos(results))
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.ADD_TODO);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}
}
