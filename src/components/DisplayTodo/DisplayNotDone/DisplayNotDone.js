import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

class DisplayNotDone extends Component {
	render() {
		return (
			<View style={{
					backgroundColor: 'red',
					flex: 1,
					alignItems: 'center',
					// justifyContent: 'center'
				}}>
				<Text>Display Not Done</Text>
			</View>
		)
	}
}

export default DisplayNotDone;
