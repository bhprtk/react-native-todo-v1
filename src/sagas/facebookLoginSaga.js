import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
// import { getSelectedDayTodos } from '../services/firebase_config';
import * as actions from '../actions/creators';

import { facebookLogin } from '../services/facebookLogin';
import getCurrentUser from '../services/getCurrentUser';

import firebase from 'firebase';

export default () => {

	function* worker() {
		yield call(facebookLogin);
		const currentUser = yield call(getCurrentUser);
		yield put(actions.setCurrentUser(currentUser));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.FACEBOOK_LOGIN);
			yield call(worker);
		}
	}

	return {
		watcher,
		worker
	}
}
