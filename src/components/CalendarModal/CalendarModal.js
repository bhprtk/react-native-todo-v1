import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View
} from 'react-native';
import DisplayCalendar from './DisplayCalendar';

class CalendarModal extends Component {

	render() {
		const { calendarVisible, hideCalendar } = this.props;
		return (
			<Modal
				position="center"
				isOpen={calendarVisible}
				onClosed={hideCalendar}
				style={{
					paddingTop: 20,
					height: 450,
					width: 300
				}}>
				<DisplayCalendar />
				<TouchableOpacity
					onPress={hideCalendar}
					style={{
						height: 40,
						width: 100,
						borderColor: 'red',
						borderWidth: 2
					}}>
					<View>
						<Text>
							Done
						</Text>
					</View>
				</TouchableOpacity>
			</Modal>
		)
	}
}

export default CalendarModal;
