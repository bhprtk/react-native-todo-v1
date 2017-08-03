import types from '../actions/types';
import { createReducer } from 'reduxsauce';
import { Map } from 'immutable';

import moment from 'moment';

const INITIAL_STATE = Map();

export function selectedDayTodos(state = INITIAL_STATE, action) {
	const { todos } = action;
	return INITIAL_STATE.merge(todos);
}

const ACTION_HANDLERS = {
	[types.SELECTED_DAY_TODOS]: selectedDayTodos
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
