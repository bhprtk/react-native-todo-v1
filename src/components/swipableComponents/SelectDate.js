import React, { Component } from 'react';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import DatePicker from '../CalendarModal/DatePicker';

import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

class SelectDate extends Component {
	state = {
		calendarVisible: false
	}

	_hideCalendar = () => this.setState({ calendarVisible: false })

	_showCalendar = () => this.setState({ calendarVisible: true })


	render() {
		const { selectedDay } = this.props;
		const day = moment(selectedDay).format('dddd, MMM Do')
		const year = moment(selectedDay).format('YYYY');
		return (
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#fff'
				}}>
				<TouchableOpacity
					onPress={this._showCalendar}
					style={{
						flexDirection: 'row',
					}}>
					<EvilIcon
						name="calendar"
						size={100}
						color="#78909C" />
					<View style={{
							flexDirection: 'column',
							paddingTop: 10
						}}>
						<Text style={{
								color: '#78909C',
								fontSize: 24,
								fontWeight: 'bold'
							}}>
							{day}
						</Text>
						<Text style={{
								color: '#78909C',
								fontSize: 18,
								fontWeight: 'bold'
							}}>
							{year}
						</Text>

					</View>

				</TouchableOpacity>
				<DatePicker
					calendarVisible={this.state.calendarVisible}
					hideCalendar={this._hideCalendar}
					/>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

export default connect(mapStateToProps)(SelectDate);
