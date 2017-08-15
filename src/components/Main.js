import React, { Component } from 'react';
import {
	ScrollView,
	StatusBar,
	Text,
	View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';

import Modal from 'react-native-modalbox';
import * as actions from '../actions/creators';

import TabComponent from './TabComponent';
import Navbar from './Navbar';
import AddButton from './AddButton';
// import DisplayCalendar from './DisplayCalendar';
import DisplayDate from './DisplayDate/DisplayDate';
import AddTodoModal from './AddTodoModal/AddTodoModal';
import CalendarModal from './CalendarModal/CalendarModal';
import DatePicker from './CalendarModal/DatePicker';
import DisplayTodo from './DisplayTodo/DisplayTodo';
import EditTodoModal from './DisplayTodo/EditTodoModal';
import Login from './Login/Login';


class Main extends Component {
	state = {
		calendarVisible: false,
		editModalVisible: false,
		modalVisible: false,
		taskToEdit: {},
		todoKey: '',
	}

	hideEditModal = () => this.setState({ editModalVisible: false })

	showEditModal = (todo, todoKey) => {
		this.setState({
			editModalVisible: true,
			taskToEdit: todo,
			todoKey
		})
	}


	hideCalendar = () => this.setState({ calendarVisible: false })

	showCalendar = () => this.setState({ calendarVisible: true })

	componentWillMount() {
		const { actions, selectedDay, selectedDayTodos } = this.props;
		actions.selectDay(selectedDay);
		actions.getCurrentUser()
	}

	render() {
		const {
			modalVisible,
			calendarVisible,
		} = this.state;

		const { currentUser, selectedDay } = this.props;

		if(Object.keys(currentUser).length) {
			if(!currentUser.noUser) {
				return (
					<TabComponent />
				)
			} else {
				return (
					<Login />
				)
			}
		} else {
			return (
				<View>
					<Text>
						Loading
					</Text>
				</View>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS(),
		selectedDay: state.selectedDay.toJS().selectedDay,
		selectedDayTodos: state.selectedDayTodos.toJS(),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
