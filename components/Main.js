import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';
import Navbar from './Navbar';
import TabComponent from './TabComponent';

import {
	ScrollView,
	StatusBar,
	Text,
	View,
} from 'react-native';
import Modal from 'react-native-modalbox';
import * as actions from '../actions/creators';

import AddButton from './AddButton';
// import DisplayCalendar from './DisplayCalendar';
import DisplayDate from './DisplayDate/DisplayDate';
import AddTodoModal from './AddTodoModal/AddTodoModal';
import CalendarModal from './CalendarModal/CalendarModal';
import DatePicker from './CalendarModal/DatePicker';
import DisplayTodo from './DisplayTodo/DisplayTodo';
import EditTodoModal from './DisplayTodo/EditTodoModal';


class Main extends Component {
	state = {
		calendarVisible: false,
		editModalVisible: false,
		modalVisible: false,
		taskToEdit: {},
		todoKey: ''
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
	}

	render() {
		const {
			modalVisible,
			calendarVisible,
		} = this.state;

		const { selectedDay } = this.props;

		return (
			<TabComponent />
		)
	}
}

function mapStateToProps(state) {
	return {
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
