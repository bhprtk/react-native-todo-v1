import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import TodoText from './TodoText';
import Icons from 'react-native-vector-icons/FontAwesome';

class IndividualTodo extends Component {
	state = {
		closeSwipeout: true
	}

	closeSwipeout = () => this.setState({ closeSwipeout: true })

	_showEditModal = () => {
		const { showEditModal, rowData, todoKey } = this.props;
		showEditModal(rowData, todoKey)
	}

	render() {
		const { showEditModal, todoKey } = this.props;
		const { todo, startTime, starred, done } = this.props.rowData;

		const editButton = (
			<EditButton
				todo={this.props.rowData}
				todoKey={todoKey}
				showEditModal={showEditModal}/>

		)
		const deleteButton = (
			<DeleteButton
				todoKey={todoKey}
				closeSwipeout={this.closeSwipeout}/>

		)
		const swipeoutBtns = [
		  {
		    component: editButton,
		  },
			{
				component: deleteButton,
			}
		]
		return (
			<TouchableOpacity
				onLongPress={this._showEditModal}>
				<View style={{
						flexDirection: 'row',
						minHeight: 100,
						borderColor: '#fff',
						borderBottomWidth: 1,
						justifyContent: 'center',
					}}>
					<CheckBox
						todoKey={todoKey}
						done={done}/>

					<TodoText
						startTime={startTime}
						starred={starred}
						todo={todo}
						done={done}
						/>

					</View>


			</TouchableOpacity>
		)
		// return (
		// 	<Swipeout
		// 		backgroundColor="#fff"
		// 		onOpen={() => this.setState({ closeSwipeout: false })}
		// 		close={this.state.closeSwipeout}
		// 		right={swipeoutBtns}
		// 		buttonWidth={100}>
		// 		<View style={{
		// 				flexDirection: 'row',
		// 				minHeight: 75,
		// 				borderColor: '#fff',
		// 				borderBottomWidth: 1,
		// 				justifyContent: 'center',
		// 			}}>
		// 			<CheckBox
		// 				todoKey={todoKey}
		// 				done={done}/>
		// 			<TodoText
		// 				todo={todo}
		// 				done={done}
		// 				/>
		//
		// 		</View>
		//
		// 	</Swipeout>
		// )
	}
}

export default IndividualTodo;
