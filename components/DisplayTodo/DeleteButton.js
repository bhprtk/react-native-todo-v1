import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
	Alert,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import * as actions from '../../actions/creators';

class DeleteButton extends Component {

	deleteTodo = () => {
		const { actions, closeSwipeout, selectedDay, todoKey } = this.props;
		Alert.alert(
			'',
			'Are you sure you want to delete this task?',
			[
				{
					text: 'Yes',
					onPress: () => {
						actions.deleteTodo({ selectedDay, todoKey });
						closeSwipeout();
					}
				},
				{
					text: 'Cancel'
				},

			],
			{cancelable: false}
		)
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
						backgroundColor: '#fff',
						width: 100
					}}>
					<TouchableOpacity
						onPress={this.deleteTodo}
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							}}>
						<Icons
							name="trash-o"
							size={25}
							color="#EF9A9A"/>
						<Text style={{
								color: '#EF9A9A',
								fontWeight: 'bold',
								fontSize: 16,
								marginLeft: 2
							}}>Delete</Text>

					</TouchableOpacity>

				</View>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
