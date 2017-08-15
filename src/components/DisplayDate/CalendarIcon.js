import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { styles } from './DisplayDateStyles';
import * as actions from '../../actions/creators';
import {
	TouchableOpacity,
	View,
} from 'react-native';

class CalendarIcon extends Component {
	resetSelectedDay = () => {
		const { actions } = this.props;
		actions.resetSelectedDay();
	}

	render() {
		return (
			<TouchableOpacity
				onPress={this.resetSelectedDay}>
				<EvilIcon
					name="calendar"
					size={50}
					color="#fff"
					style={styles.calendarIcon} />
			</TouchableOpacity>

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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarIcon);
