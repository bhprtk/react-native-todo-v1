import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './DisplayDateStyles';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

class DownArrow extends Component {
	render() {
		const { showCalendar } = this.props;
		return (
			<TouchableOpacity
				style={styles.dropDownButton}>
				<View
					style={styles.arrowDown}>
					<Ionicon
						color="#fff"
						name="md-arrow-dropdown"
						size={40}
						/>
				</View>
			</TouchableOpacity>
		)
	}
}

export default DownArrow;
