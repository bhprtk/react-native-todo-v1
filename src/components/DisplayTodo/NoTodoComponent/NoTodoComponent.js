import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	View
} from 'react-native';


import SwipeRight from './SwipeRight';
import SwipeLeft from './SwipeLeft';

class NoTodoComponent extends Component {
	render() {
		return (
			<View style={{
					flex: 2,
					flexDirection: 'column',
				}}>

				<SwipeLeft />
				<SwipeRight />


			</View>
		)
	}
}

export default NoTodoComponent;
