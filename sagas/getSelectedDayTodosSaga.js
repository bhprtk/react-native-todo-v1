import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { getSelectedDayTodos } from '../services/firebase_config';
import * as actions from '../actions/creators';

export default () => {

	function* worker(selectedDay) {
		let results = yield call(getSelectedDayTodos, selectedDay)
		if(!results) {
			results = {};
			results.noTasks = true;
		}
		yield put(actions.selectedDayTodos(results))
	}

	function* watcher() {
		while(true) {
			const input = yield take([types.GET_SELECTED_DAY_TODOS, types.SELECT_DAY]);
			const { selectedDay } = input;
			yield call(worker, selectedDay);
		}
	}

	return {
		watcher,
		// worker
	}
}
