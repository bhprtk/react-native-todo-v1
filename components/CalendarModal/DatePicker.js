import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import * as actions from '../../actions/creators';

class DatePicker extends Component {
	selectDay = date => {
		const { actions, hideCalendar } = this.props;
		const dateObj = moment(date).format();
		actions.selectDay(dateObj);
		hideCalendar();
	}

	render() {
		const { calendarVisible, hideCalendar } = this.props;
		return (
			<DateTimePicker
				isVisible={calendarVisible}
				onConfirm={this.selectDay}
				onCancel={hideCalendar}
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

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
