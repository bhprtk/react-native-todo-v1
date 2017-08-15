import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
	containerNotActive: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	containerActive: {
		flex: 1,
		borderTopColor: '#78909C',
		borderTopWidth: 3,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',

	},
	textActive: {
		color: '#9E9E9E',
		fontWeight: 'bold'
	},
	textNotActive: {
		color: '#9E9E9E',
		fontWeight: 'bold'
	}
})

class Today extends Component {
	render() {
		const { activeToday, changeNav } = this.props;
		let containerStyle, textStyle;
		if(activeToday) {
			containerStyle = styles.containerActive;
			textStyle = styles.textActive;
		} else {
			containerStyle = styles.containerNotActive;
			textStyle = styles.textNotActive;
		}
		return (
			<TouchableOpacity
				onPress={() => changeNav('today')}
				style={containerStyle}>
				<MaterialIcons
					name="today"
					size={30}
					color='#78909C'
					/>
				<Text
					style={textStyle}>
					Today
				</Text>

			</TouchableOpacity>
		)
	}
}

export default Today;
