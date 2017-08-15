import { createReducer } from 'reduxsauce';
import { Map } from 'immutable';

import types from '../actions/types';

const INITIAL_STATE = Map();

export function setCurrentUser(state = INITIAL_STATE, action) {
	const { currentUser } = action;
	return INITIAL_STATE.merge(currentUser);
}

const ACTION_HANDLERS = {
	[types.SET_CURRENT_USER]: setCurrentUser
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
