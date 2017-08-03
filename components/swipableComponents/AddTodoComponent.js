import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

import ActionButtons from '../AddTodoModal/ActionButtons';
import AddTodoModal from '../AddTodoModal/AddTodoModal';
import TextBox from '../AddTodoModal/TextBox/TextBox';
import * as actions from '../../actions/creators';


class AddTodoComponent extends Component {
	state = {
		calendarVisible: false,
		editModalVisible: false,
		modalVisible: false,
		taskToEdit: {},
		todoKey: '',
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	_hideModal = () => this.setState({ modalVisible: false })

	_showModal = () => this.setState({ modalVisible: true, modalIsDisabled: true })


	_cancel = () => this.setState({
		textBoxText: ''
	})

	_handleTextChange = textBoxText => this.setState({ textBoxText })

	render() {
		const { selectedDay } = this.props;
		const { modalVisible } = this.state;
 		const day = moment(selectedDay).format('ddd, MMM Do');
		return (
			<View style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<TouchableOpacity
					onPress={this._showModal}
					style={{
						flexDirection: 'row',
					}}>
					<Entypo
						name="add-to-list"
						size={80}
						color="#78909C"
						/>
						<Text style={{
								color: '#78909C',
								fontSize: 24,
								fontWeight: 'bold',
								paddingLeft: 10,
								paddingTop: 20,
							}}>
							Add a task
						</Text>
				</TouchableOpacity>
				<AddTodoModal
					modalVisible={modalVisible}
					hideModal={this._hideModal}/>
			</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);
