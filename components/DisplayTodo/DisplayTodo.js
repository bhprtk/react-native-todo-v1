import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';
import {
	ListView,
	ScrollView,
	Text,
	View
} from 'react-native';
import * as actions from '../../actions/creators';
import IndividualTodo from './IndividualTodo';

class DisplayTodo extends Component {
	constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
			ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

	_sortByTime = selectedDayTodos => {
		let sortable = [];

		for(let key in selectedDayTodos) {
			sortable.push([key, selectedDayTodos[key]]);
		}

		sortable.sort(function (a, b) {
	  	return new Date('1970/01/01 ' + a[1].startTime) - new Date('1970/01/01 ' + b[1].startTime);
		});

		let noTime = [], yesTime = [];

		sortable.forEach(data => {
			const { startTime } = data[1];
			if(startTime ==='0:00 am') {
				noTime.push(data);
			} else {
				yesTime.push(data);
			}
		})

		let finalArr = yesTime.concat(noTime);

		return finalArr.map(pair => pair[0]);
	}

	componentWillReceiveProps(nextProps) {
		const { selectedDayTodos } = nextProps;

		const todoKeys = this._sortByTime(selectedDayTodos);

		this.setState({
			dataSource: this.state.ds.cloneWithRows(todoKeys)
		})
	}

	componentWillMount() {
		const { selectedDayTodos } = this.props;

		const todoKeys = this._sortByTime(selectedDayTodos);

		this.setState({
			dataSource: this.state.ds.cloneWithRows(todoKeys)
		})
	}

	render() {
		return (
			<ListView
				enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={todoKey => (
					<IndividualTodo
						showEditModal={this.props.showEditModal}
						todoKey={todoKey}
						rowData={this.props.selectedDayTodos[todoKey]} />
				)}
      />
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay,
		todos: state.todos.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);
