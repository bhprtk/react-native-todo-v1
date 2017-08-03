import types from '../actions/types';
import { Map, fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import moment from 'moment';

const INITIAL_STATE = Map({
	selectedDay: moment().format()
});

export function resetSelectedDay(state = INITIAL_STATE, action) {
	return state.merge(INITIAL_STATE);
}

export function selectDay(state = INITIAL_STATE, action) {
	const selectedDay = fromJS({selectedDay: action.selectedDay});
	return state.merge(selectedDay);
}

const ACTION_HANDLERS = {
	[types.SELECT_DAY]: selectDay,
	[types.RESET_SELECT_DAY]: resetSelectedDay
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
