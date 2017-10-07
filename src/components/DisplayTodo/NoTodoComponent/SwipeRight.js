import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	View
} from 'react-native';

class SwipeRight extends Component {
	render() {
		return (
			<View style={{
					flex: 1,
					backgroundColor: 'blue'
				}}>
				<Text>SwipeRight</Text>
			</View>
		)
	}
}

export default SwipeRight;
