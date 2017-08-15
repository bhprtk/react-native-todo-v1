import types from '../actions/types';
import { createReducer } from 'reduxsauce';
import { Map } from 'immutable';

import moment from 'moment';

const INITIAL_STATE = Map();

export function resetSelectedDayTodos(state = INITIAL_STATE, action) {
	return INITIAL_STATE;
}

export function selectedDayTodos(state = INITIAL_STATE, action) {
	const { todos } = action;
	return INITIAL_STATE.merge(todos);
}

const ACTION_HANDLERS = {
	[types.SELECTED_DAY_TODOS]: selectedDayTodos,
	// [types.LOGOUT_USER]: resetSelectedDayTodos
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
