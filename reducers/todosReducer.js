import types from '../actions/types';
import { createReducer } from 'reduxsauce';
import { Map } from 'immutable';

const INITIAL_STATE = Map();

export function onChangeTodos(state = INITIAL_STATE, action) {
	const { todos } = action.data;
	return state.merge(todos);
}

const ACTION_HANDLERS = {
	[types.ON_CHANGE_TODOS]: onChangeTodos
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
