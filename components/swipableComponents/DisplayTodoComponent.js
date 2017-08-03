import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View
} from 'react-native';

import { connect } from 'react-redux';

import moment from 'moment';

import DisplayTodo from '../DisplayTodo/DisplayTodo';
import BottomNavigationComponent from '../DisplayTodo/BottomNavigation/BottomNavigationComponent';
import DisplayNotDone from '../DisplayTodo/DisplayNotDone/DisplayNotDone';
import DisplayTodaysImportant from '../DisplayTodo/DisplayTodaysImportant';
import EditTodoModal from '../DisplayTodo/EditTodoModal';
import ToolbarComponent from './ToolbarComponent';

class DisplayTodoComponent extends Component {

	state = {
		editModalVisible: false,
		taskToEdit: {},
		todoKey: '',
		nav: 'today'
	}

	_hideModal = () => this.setState({ editModalVisible: false })

	_showModal = (todo, todoKey) => {
		this.setState({
			editModalVisible: true,
			taskToEdit: todo,
			todoKey
		})

	}

	_changeNav = val => {
		console.log ('val:', val)
		this.setState({ nav: val })
	}

	render() {
		const { selectedDay, selectedDayTodos } = this.props;
		const { nav } = this.state;
		let day, header, displayTodo;

		if(moment().format('ddd, MMM Do') === moment(selectedDay).format('ddd, MMM Do')) {
			day = 'today';
		} else {
			day = moment(selectedDay).format('ddd, MMM Do');
		}

		let todaysImportant = {};
		for(let key in selectedDayTodos) {
			if(selectedDayTodos[key].starred) {
				todaysImportant[key] = selectedDayTodos[key]
			}
		}

		let todaysNotDone = {};
		for(let key in selectedDayTodos) {
			if(!selectedDayTodos[key].done) {
				todaysNotDone[key] = selectedDayTodos[key]
			}
		}

		if(nav === 'today') {
			header = (
				<View style={{
						height: 80,
						paddingTop: 40,
						marginRight: 20,
						marginLeft: 20,
						borderBottomWidth: 1,
						borderBottomColor: '#ccc'
					}}>
					<Text style={{
							color: '#696969',
							fontWeight: 'bold',
							marginBottom: 10,
							fontSize: 16,
							// paddingLeft: 20
						}}>
						All tasks for <Text style={{ color: '#78909C' }}>{day}</Text>
					</Text>
				</View>
			)
			displayTodo = (
				<DisplayTodo
					showEditModal={this._showModal}
					selectedDay={this.props.selectedDay}
					selectedDayTodos={this.props.selectedDayTodos}/>
			)
		} else if (nav === 'important'){
			header = (
				<View style={{
						height: 80,
						paddingTop: 40,
						marginRight: 20,
						marginLeft: 20,
						borderBottomWidth: 1,
						borderBottomColor: '#ccc'
					}}>
					<Text style={{
							color: '#696969',
							fontWeight: 'bold',
							marginBottom: 10,
							fontSize: 16,
							// paddingLeft: 20
						}}>
						All important tasks for <Text style={{ color: '#78909C' }}>{day}</Text>
					</Text>
				</View>
			)
			displayTodo = (
				<DisplayTodo
					showEditModal={this._showModal}
					selectedDay={this.props.selectedDay}
					selectedDayTodos={todaysImportant}
					/>
			)
		} else if (nav === 'not-done') {
			header = (
				<View style={{
						height: 80,
						paddingTop: 40,
						marginRight: 20,
						marginLeft: 20,
						borderBottomWidth: 1,
						borderBottomColor: '#ccc'
					}}>
					<Text style={{
							color: '#696969',
							fontWeight: 'bold',
							marginBottom: 10,
							fontSize: 16,
							// paddingLeft: 20
						}}>
						All tasks not done for <Text style={{ color: '#78909C' }}>{day}</Text>
					</Text>
				</View>
			)
			displayTodo = (
				<DisplayTodo
					showEditModal={this._showModal}
					selectedDay={this.props.selectedDay}
					selectedDayTodos={todaysNotDone}
					/>
			)
		}

		if(!Object.keys(this.props.selectedDayTodos).length) {
			return (
				<Text>Loading...</Text>
			)
		} else {
			return (
				<View style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}>

					{header}

					<ScrollView>
						{
							this.props.selectedDayTodos.noTasks ?
							<Text>Swipe right to add a todo</Text>
							:
							displayTodo
						}
						<EditTodoModal
							editModalVisible={this.state.editModalVisible}
							hideModal={this._hideModal}
							selectedDay={selectedDay}
							todo={this.state.taskToEdit}
							todoKey={this.state.todoKey}/>
					</ScrollView>

					<View>
						<BottomNavigationComponent
							changeNav={this._changeNav}/>

					</View>
				</View>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay,
		selectedDayTodos: state.selectedDayTodos.toJS(),
	}
}

export default connect(mapStateToProps)(DisplayTodoComponent);
