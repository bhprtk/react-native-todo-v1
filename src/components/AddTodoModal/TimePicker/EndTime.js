import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import TimePicker from './TimePicker';

class EndTime extends Component {
	state = {
		timePickerVisible: false
	}

	hideTimePicker = time => {
		const { addEndTime } = this.props;
		if(time) {
			const endTime = moment(time).format('h:mm a');
			addEndTime(endTime);
		}
		this.setState({
			timePickerVisible: false
		})
	}
	showTimePicker = () => {
		this.setState({
			timePickerVisible: true
		})
	}
	render() {
		const { endTime } = this.props;
		return (
			<View style={{
					marginLeft: 10
				}}>
				<TouchableOpacity
					onPress={this.showTimePicker}
					style={{
						borderColor: '#78909C',
						borderWidth: 2,
						width: 150,
						height: 50,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<View>
						<Text
							style={{
								color: '#78909C',
								fontSize: 14,
								fontWeight: 'bold',
							}}>
							End Time: {endTime}
						</Text>
					</View>
				</TouchableOpacity>

				<DateTimePicker
					mode="time"
					isVisible={this.state.timePickerVisible}
					is24Hour={false}
					onConfirm={this.hideTimePicker}
					onCancel={this.hideTimePicker}
					minimumDate={this.props.minimumDate}
					/>

			</View>

		)
	}
}

export default EndTime;
