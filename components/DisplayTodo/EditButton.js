import React, { Component } from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import EditTodoModal from './EditTodoModal';

class EditButton extends Component {
	state = {
		modalVisible: false
	}

	hideModal = () => this.setState({ modalVisible: false })

	showModal = () => {
		const { showEditModal, todo, todoKey } = this.props;
		showEditModal(todo, todoKey);
	}

	render() {
		return (
			<View style={{
					backgroundColor: '#fff',

					justifyContent: 'center',
					height: 75,
					alignItems: 'center',
				}}>
				<View style={{
						borderRightColor: '#78909C',
						borderRightWidth: 2,
						backgroundColor: '#fff',
						width: 100
					}}>
					<TouchableOpacity
						onPress={this.showModal}
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							}}>
						<Icons
							name="edit"
							size={25}
							color="#9bc0b0"/>
						<Text style={{
								color: '#9bc0b0',
								fontWeight: 'bold',
								fontSize: 16,
								marginLeft: 2
							}}>Edit</Text>

					</TouchableOpacity>

				</View>



			</View>
		)
	}
}

export default EditButton;
