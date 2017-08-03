import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { styles } from './DisplayDateStyles';
import AddTodoButton from './AddTodoButton';

import {
	FlatList,
	ListItem,
	StyleSheet,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import moment from 'moment';

import CalendarIcon from './CalendarIcon';
import DownArrow from './DownArrow';
import UpArrow from './UpArrow';

class DisplayDate extends Component {
	render() {
		const {
			calendarVisible,
			hideCalendar,
			showCalendar,
			selectedDay,
			showModal
	 	} = this.props;
		const day = moment(selectedDay).format('ddd, MMM Do')
		return (
			<View style={styles.container}>
				<View style={{
						flex: 1,
						backgroundColor: '#78909C',
						alignItems: 'center',
						justifyContent: 'center',
						paddingRight: 20,
						flexDirection: 'row',
						borderRightColor: '#fff',
						borderRightWidth: 3
					}}>
					<TouchableOpacity
						onPress={showCalendar}
						style={{
							flexDirection: 'row',
						}}>
						<EvilIcon
							name="calendar"
							size={50}
							color="#fff"
							style={styles.calendarIcon} />
						<Text style={styles.text}>
							{day}
						</Text>

						{
							calendarVisible ?
							<UpArrow hideCalendar={hideCalendar}/>
							:
							<DownArrow showCalendar={showCalendar}/>
						}

					</TouchableOpacity>

				</View>

				<AddTodoButton
					showModal={showModal}/>

			</View>


			)
		}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

export default connect(mapStateToProps)(DisplayDate);
