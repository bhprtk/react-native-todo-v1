import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { deleteTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		deleteTodo(data);
		yield put(actions.getSelectedDayTodos(data.selectedDay))
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.DELETE_TODO);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}

}
