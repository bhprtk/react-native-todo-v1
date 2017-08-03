import { bindActionCreators } from 'redux';
import { connect }  from 'react-redux';
import * as actions from '../../actions/creators';
import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CheckBox extends Component {
	markDone = () => {
		const { actions, todoKey } = this.props;
		// actions.markDone
	}

	toggleCheckbox = () => {
		const { actions, done, selectedDay, todoKey } = this.props;
		const value = !done;
		actions.toggleCheckbox({ selectedDay, value, todoKey })
	}

	render() {
		const { done } = this.props;
		let icon, color;
		if(done) {
			icon = "checkbox-marked-outline";
			color = "#9bc0b0";
		} else {
			icon = "checkbox-blank-outline"
			// color = "#78909C";
			color = "#9E9E9E";
		}
		return (
			<View style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#fff',
					borderColor: '#fff',
					borderBottomWidth: 1,
				}}>

					<TouchableOpacity
						onPress={this.toggleCheckbox}>
						<Icon
							name={icon}
							size={60}
							color={color}
							/>

					</TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
