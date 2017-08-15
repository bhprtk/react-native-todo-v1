import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

class CalendarButton extends Component {
	render() {
		const { showCalendar } = this.props;
		return (
			<TouchableOpacity
				onPress={showCalendar}
				style={{
					borderColor: '#222',
					borderWidth: 1,
					width: 100,
					height: 50
				}}>
				<View>
					<Text>
						Calendar
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default CalendarButton;
