import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { getSelectedDayTodos } from '../services/firebase_config';
import * as actions from '../actions/creators';
import getCurrentUser from '../services/getCurrentUser';

export default () => {

	function* worker(selectedDay) {
		const currentUser = yield call(getCurrentUser);
		let results = yield call(getSelectedDayTodos, selectedDay, currentUser.id)
		if(!results) {
			results = {};
			results.noTasks = true;
		}
		yield put(actions.selectedDayTodos(results))
	}

	function* watcher() {
		while(true) {
			const input = yield take([types.GET_SELECTED_DAY_TODOS, types.SELECT_DAY, types.SET_CURRENT_USER]);
			const { selectedDay } = input;
			yield call(worker, selectedDay);
		}
	}

	return {
		watcher,
		worker
	}
}
