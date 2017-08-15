import React, { Component } from 'react';
import {
	Alert,
	Modal,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Modal from 'react-native-modalbox';
import moment from 'moment';

import TextBox from '../AddTodoModal/TextBox/TextBox';
import StartTime from '../AddTodoModal/TimePicker/StartTime';
import Star from '../AddTodoModal/Star';
import ActionButtons from '../AddTodoModal/ActionButtons';
import * as actions from '../../actions/creators';

class EditTodoModal extends Component {
	state = {
		textBoxText: '',
		startTime: '0:00 am',
		starred: false,
	}

	addStartTime = startTime => this.setState({ startTime })

	cancel = () => {
		const { hideModal } = this.props;
		this.setState({
			textBoxText: '',
			startTime: '0:00 am',
			starred: false,
		})
		hideModal();
	}

	_deleteTask = () => {
		const { actions, currentUser, hideModal, selectedDay, todoKey } = this.props;
		const uid = currentUser.id;
		Alert.alert(
			'',
			'Are you sure you want to delete this task?',
			[
				{
					text: 'Yes',
					onPress: () => {
						actions.deleteTodo({ selectedDay, todoKey, uid });
						hideModal();
					}
				},
				{
					text: 'Cancel'
				},

			],
			{cancelable: false}
		)
	}

	submitTodo = () => {
		const { actions, currentUser, todoKey, selectedDay } = this.props;
		const { textBoxText, startTime, starred } = this.state;
		if(!textBoxText) {
			Alert.alert(
				'',
				'Task cannot be empty',
				[{text: 'Ok', onPress: () => console.log('ok')}],
				{cancelable: false}
			)
		} else {
			const data = {
				todo: {
					todo: textBoxText,
					startTime,
					starred,
				},
				selectedDay,
				todoKey,
				uid: currentUser.id
			}
			actions.editTodo(data);
			this.cancel();

		}
	}

	handleTextChange = textBoxText => this.setState({ textBoxText })

	toggleStar = () => this.setState({ starred: !this.state.starred })

	editStartTime = startTime => this.setState({ startTime })


	componentWillReceiveProps(nextProps) {
		if(Object.keys(nextProps.todo).length) {
			const { todo, startTime, starred } = nextProps.todo;
			this.setState({
				textBoxText: todo,
				startTime,
				starred
			});

		}
	}
	// swipeToClose={false}
	// position="top"
	// isOpen={editModalVisible}
	// onClosed={hideModal}

	render() {
		const { hideModal, editModalVisible, selectedDay } = this.props;
		const day = moment(selectedDay).format('ddd, MMM Do');
		// const { todo, startTime, starred, done } = this.props.todo;
		// console.log ('todo:', todo)
		return (
			<Modal
				hardwareAccelerated={true}
				animationType="slide"
				onRequestClose={hideModal}
				visible={editModalVisible}
				>

				<View
					style={{
						backgroundColor: '#fff',
						flexDirection: 'column',
						paddingLeft: 10,
				    paddingRight: 10,
				    paddingTop: 20,
					}}>
					<View style={{
							flexDirection: 'row',
							justifyContent: 'center',
						}}>
						<View>
							<Text style={{
									color: '#696969',
									fontWeight: 'bold',
									fontSize: 16,
									marginBottom: 20
								}}>
								Edit task for <Text style={{ color: '#78909C' }}>{day}</Text>
						</Text>

						</View>
						<TouchableOpacity
							onPress={this._deleteTask}
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'flex-end',
							}}>
							<EvilIcons
								name="trash"
								size={30}
								color="#E57373"
								iconStyle={{
									fontWeight: 'bold'
								}}/>
							<Text style={{
									color: '#E57373',
									fontSize: 16,
								}}>

								Delete task
							</Text>

						</TouchableOpacity>

					</View>

				<TextBox
					handleTextChange={this.handleTextChange}
					textBoxText={this.state.textBoxText}  />

				</View>

				<StartTime
					addStartTime={this.addStartTime}
					startTime={this.state.startTime}/>

				<Star
					starred={this.state.starred}
					toggleStar={this.toggleStar}/>

				<View
				  style={{
				    borderBottomColor: '#ccc',
				    borderBottomWidth: 2,
						marginRight: 10,
						marginLeft: 10,
						marginTop: 20
				  }}
				/>

				<ActionButtons
					submitTodo={this.submitTodo}
					cancel={this.cancel}
					textBoxText={this.state.textBoxText}
					/>

			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoModal);
