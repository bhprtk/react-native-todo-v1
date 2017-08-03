import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
// import Icons from 'react-native-vector-icons/FontAwesome';

class AddTodoButton extends Component {
	render() {
		return (
			<View style={{
					flex: 1,
					backgroundColor: '#78909C',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
				}}>
				<TouchableOpacity
					onPress={this.props.showModal}
					style={{
						flexDirection: 'row',
					}}>
					<Icons
						name="add-to-list"
						color="#fff"
						size={40}
						style={{
							marginRight: 10
						}}
						/>

					<Text style={{
							color: '#fff',
							fontSize: 18,
							fontWeight: 'bold',
							paddingTop: 10
						}}>
						Add a task
					</Text>

				</TouchableOpacity>

			</View>
		)
	}
}

export default AddTodoButton;
