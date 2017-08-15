import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';

import getCurrentUser from '../services/getCurrentUser';

export default () => {

	function* worker() {
		const currentUser = yield call(getCurrentUser);
		yield put(actions.setCurrentUser(currentUser));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.GET_CURRENT_USER);
			console.log ('input:', input)
			yield call(worker);
		}
	}

	return {
		watcher,
		worker
	}
}
