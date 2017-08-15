import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import moment from 'moment';

import DisplayTodo from './DisplayTodo';


class DisplayTodaysImportant extends Component {
	render() {
		const { showEditModal, selectedDay, selectedDayTodos } = this.props;

		console.log ('selectedDayTodos:', selectedDayTodos)
		let todaysImportant = {};
		for(let key in selectedDayTodos) {
			if(selectedDayTodos[key].starred) {
				todaysImportant[key] = selectedDayTodos[key]
			}
		}

		let day;
		if(moment().format() === selectedDay) {
			day = 'today';
		} else {
			day = moment(selectedDay).format('ddd, MMM Do');
		}

		return (
			<View style={{
					flexDirection: 'column',
					justifyContent: 'center',
					paddingTop: 40,
				}}>

				<DisplayTodo
					showEditModal={showEditModal}
					selectedDay={selectedDay}
					selectedDayTodos={todaysImportant}
					/>



			</View>
		)
	}
}

export default DisplayTodaysImportant;
