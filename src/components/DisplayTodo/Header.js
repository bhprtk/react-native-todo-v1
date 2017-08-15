import React, { Component } from 'react';
import {
	Alert,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/creators';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Entypo from 'react-native-vector-icons/Entypo';

class Header extends Component {

	_logout = () => {
		const { actions } = this.props;
		Alert.alert(
			'',
			'Are you sure you want logout of your account?',
			[
				{
					text: 'Yes',
					onPress: () => actions.logout()
				},
				{
					text: 'Cancel'
				},

			],
			{cancelable: false}
		)
	}

	render() {
		const { headerText, openDrawer } = this.props;

		return (
			<View style={{
					// backgroundColor: 'red',
					flexDirection: 'row',
					justifyContent: 'space-between',
					height: 80,
					paddingTop: 40,
					marginRight: 20,
					marginLeft: 20,
					borderBottomWidth: 1,
					borderBottomColor: '#ccc'
				}}>

			<View style={{
					justifyContent: 'center'
				}}>
				{headerText}
			</View>

			<TouchableOpacity
				onPress={this._logout}>
				<MaterialCommunityIcons
					name="logout"
					size={30}
					color="#696969"
					/>
			</TouchableOpacity>

		</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
