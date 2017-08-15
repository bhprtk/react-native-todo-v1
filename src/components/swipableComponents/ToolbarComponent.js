import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import { Toolbar } from 'react-native-material-ui';

const DisplayDate = ({ selectedDay }) => {
	const day = moment(selectedDay).format('ddd, MMM Do')
	return (
		<View style={{
				flexDirection: 'row'
			}}>
			<EvilIcon
				name="calendar"
				size={35}
				color="#fff" />
			<Text style={{
					color: '#fff',
					fontWeight: 'bold',
					fontSize: 18
				}}>
				{day}
			</Text>
		</View>
	)
}

class ToolbarComponent extends Component {
	render() {
		const { selectedDay } = this.props;
		return (
			<Toolbar
			 rightElement="menu"
			 leftElement={<DisplayDate selectedDay={selectedDay}/ >}
			 style={{
				 container: {
					 backgroundColor: '#78909C',
					 paddingTop: 20,
					 height: 80
				 }
			 }}
		 	/>
		)
	}
}

export default ToolbarComponent;
