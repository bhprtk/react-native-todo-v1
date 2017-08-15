import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

class DrawerComponent extends Component {
	render() {
		return (
			<View style={{
					flex: 1,
					backgroundColor: 'red'
				}}>
				<Text>
					Hello
				</Text>
			</View>
		)
	}
}

export default DrawerComponent;
