import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import logoutUser from '../services/logoutUser';
import getCurrentUser from '../services/getCurrentUser';

export default () => {

	function* worker() {
		yield call(logoutUser);
		const currentUser = yield call(getCurrentUser);
		yield put(actions.setCurrentUser(currentUser))
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.LOGOUT_USER);
			yield call(worker)
		}
	}

	return {
		watcher,
		worker
	}
}
