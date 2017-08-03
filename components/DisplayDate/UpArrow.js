import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from './DisplayDateStyles';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

class UpArrow extends Component {
	render() {
		const { hideCalendar } = this.props;
		return (
			<TouchableOpacity
				style={styles.dropDownButton}>
				<View
					style={styles.arrowDown}>
					<Ionicon
						color="#fff"
						name="md-arrow-dropup"
						size={40}
						/>
				</View>
			</TouchableOpacity>
		)
	}
}

export default UpArrow;
