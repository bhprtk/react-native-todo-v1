import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
// import Modal from 'react-native-modalbox';
import CalendarButton from './CalendarButton';
import TextBox from './TextBox/TextBox';
import CalendarModal from '../CalendarModal/CalendarModal';
import EndTime from './TimePicker/EndTime';
import StartTime from './TimePicker/StartTime';
import Star from './Star';
import ActionButtons from './ActionButtons';

import {
	Alert,
	KeyboardAvoidingView,
	Modal,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import * as actions from '../../actions/creators';

class AddTodoModal extends Component {
	state = {
		textBoxText: '',
		startTime: '0:00 am',
		done: false,
		starred: false,
	}

	handleTextChange = textBoxText => this.setState({ textBoxText })

	toggleStar = () => this.setState({ starred: !this.state.starred })

	addStartTime = startTime => this.setState({ startTime })


	cancel = () => {
		const { hideModal } = this.props;
		this.setState({
			textBoxText: '',
			startTime: '0:00 am',
			done: false,
			starred: false,
		})
		hideModal();
	}

	submitTodo = () => {
		const { actions, hideModal, selectedDay } = this.props;
		const { textBoxText, startTime, done, starred } = this.state;
		if(!this.state.textBoxText) {
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
					done,
					starred,
				},
				selectedDay
			}
			actions.addTodo(data);
			this.cancel();
		}
	}

	render() {
		const { hideModal, modalVisible, selectedDay } = this.props;
		const day = moment(selectedDay).format('ddd, MMM Do');

		return (
			<Modal
				hardwareAccelerated={true}
				animationType="slide"
				visible={modalVisible}
				onRequestClose={hideModal}
				>
					<View
						style={{
							backgroundColor: '#fff',
							flexDirection: 'column',
							paddingLeft: 10,
					    paddingRight: 10,
					    paddingTop: 20,
						}}>
						<Text style={{
								color: '#696969',
								fontWeight: 'bold',
								marginBottom: 20,
								fontSize: 16
							}}>
							Add a task for <Text style={{ color: '#78909C' }}>{day}</Text>
					</Text>

					<TextBox
						addTodo={this.addTodo}
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
					textBoxText={this.state.textBoxText}
					cancel={this.cancel}
					/>

			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);
