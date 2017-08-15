import React, { Component } from 'react';
import { ActionButton } from 'react-native-material-ui';
import {
	Text,
	View,
} from 'react-native';

class AddButton extends Component {
	render() {
		const { showModal } = this.props;
		return (
			<ActionButton
				style={{
					container: {
						backgroundColor: '#81C784'
					}
				}}
				onPress={showModal} />
		)
	}
}

export default AddButton;
