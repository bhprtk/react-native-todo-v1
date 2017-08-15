import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

class NotDone extends Component {
	render() {
		const { activeNotDone, changeNav } = this.props;
		let containerStyle, textStyle;
		if(activeNotDone) {
			containerStyle = styles.containerActive;
			textStyle = styles.textActive;
		} else {
			containerStyle = styles.containerNotActive;
			textStyle = styles.textNotActive;
		}
		return (
			<TouchableOpacity
				onPress={() => changeNav('not-done')}
				style={containerStyle}>
				<MaterialIcons
					name="checkbox-blank-outline"
					size={30}
					color='#9bc0b0'
					/>
				<Text
					style={textStyle}>
					Not Done
				</Text>

			</TouchableOpacity>
		)
	}
}

export default NotDone;
