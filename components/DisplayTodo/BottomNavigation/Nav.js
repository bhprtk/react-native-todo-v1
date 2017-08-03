import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Nav extends Component {
	render() {
		const { icon, text } = this.props;
		return (
			<TouchableOpacity
				style={{
					flex: 1,
					backgroundColor: 'red',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center'
				}}>
				<MaterialIcons
					name={icon}
					size={30}
					/>
				<Text>
					{text}
				</Text>

			</TouchableOpacity>
		)
	}
}

export default Nav;
