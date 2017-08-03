import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import * as actions from '../../actions/creators';

class DisplayCalendar extends Component {
	selectDay = date => {
		const { actions, selectedDay } = this.props;
		const { dateString } = date;
		const dateObj = moment(dateString).format();
		const newDate = moment(dateObj).format('MM-DD-YYYY');
		actions.selectDay(dateObj)
	}
	render() {
		const { selectedDay } = this.props;
		const day = moment(selectedDay).format('YYYY-MM-DD')
		let temp = {};
		temp[day] = { selected: true };
		return (
			<Calendar
				markedDates={temp}
				onDayPress={this.selectDay}
				/>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCalendar);
