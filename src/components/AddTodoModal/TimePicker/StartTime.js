import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import moment from 'moment';

import TimePicker from './TimePicker';

class StartTime extends Component {
	state = {
		timePickerVisible: false
	}

	hideTimePicker = time => {
		if(time) {
			const { addStartTime } = this.props;
			const startTime = moment(time).format('h:mm a');
			addStartTime(startTime, time);
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
		const { startTime } = this.props;
		return (
			<View>
				<TouchableOpacity
					onPress={this.showTimePicker}
					style={{
						backgroundColor: '#fff',
						borderColor: '#fff',
						borderWidth: 2,
						height: 60,
						marginTop: 10,
						justifyContent: 'center',
						paddingRight: 10,
						paddingLeft: 10,
					}}>
					<View style={{
							flexDirection: 'row'
						}}>
						<View style={{
								flex: 1,
								justifyContent: 'center',

							}}>
							<Text
								style={{
									color: '#ccc',
									fontSize: 18,
									fontWeight: 'bold',
								}}>
								Start Time:
							</Text>
						</View>
						<View style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Text style={{
									fontSize: 32,
									color: '#9E9E9E',
									fontWeight: 'bold',
								}}>
								{startTime}

							</Text>

						</View>
					</View>
				</TouchableOpacity>

				<DateTimePicker
					mode="time"
					isVisible={this.state.timePickerVisible}
					is24Hour={false}
					onConfirm={this.hideTimePicker}
					onCancel={this.hideTimePicker}
					/>

			</View>

		)
	}
}

export default StartTime;
