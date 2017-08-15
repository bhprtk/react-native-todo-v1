import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

class Important extends Component {
	render() {
		const { activeImportant, changeNav } = this.props;
		let containerStyle, textStyle;
		if(activeImportant) {
			containerStyle = styles.containerActive;
			textStyle = styles.textActive;
		} else {
			containerStyle = styles.containerNotActive;
			textStyle = styles.textNotActive;
		}
		return (
			<TouchableOpacity
				onPress={() => changeNav('important')}
				style={containerStyle}>
				<FontAwesome
					name="star"
					size={30}
					color="#FFD700"
					/>
				<Text
					style={textStyle}>
					Important
				</Text>

			</TouchableOpacity>
		)
	}
}

export default Important;
