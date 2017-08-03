import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

class TimePicker extends Component {

	hideTimePicker = time => {
		console.log ('time:', time)
		// const { hideTimePicker } = this.props;
		// hideTimePicker(time);
	}

	render() {
		const { timePickerVisible } = this.props;
		return (

				<DateTimePicker
					mode="time"
					isVisible={timePickerVisible}
					is24Hour={false}
					onConfirm={this.hideTimePicker}
					onCancel={this.hideTimePicker}
					/>

		)
	}
}

export default TimePicker;
