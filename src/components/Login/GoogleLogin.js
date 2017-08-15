import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/creators';

import Expo from 'expo';
import firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class GoogleLogin extends Component {

	_googleSignIn = () => {
		const { actions } = this.props;
		actions.googleLogin();
	}

	render() {
		console.log ('this.props.currentUser:', this.props.currentUser)
		// const googleColor = '#FF8A80';
		const googleColor = '#cc827b';
		return (
			<TouchableOpacity
				onPress={this._googleSignIn}
				style={{
					backgroundColor: googleColor,
					borderRadius: 5,
					flexDirection: 'row',
					borderWidth: 2,
					borderColor: googleColor,
					height: 60,
					// width: 200,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<View style={{
						flex: 1,
						// backgroundColor: '#ccc',
						borderRightColor: '#fff',
						borderRightWidth: 1,
						alignItems: 'center',
						justifyContent: 'center',
						height: 46
					}}>

					<FontAwesome
						name="google"
						color='#fff'
						size={20}
						/>

				</View>
				<View style={{
						flex: 3,
						paddingLeft: 10
					}}>
					<Text style={{
							color: '#fff',
							fontWeight: 'bold',
						}}>
						Google
					</Text>

				</View>
			</TouchableOpacity>
		)
	}
}

function mapStateToProps(state) {
	return {
		cpurrentUser: state.currentUser.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);
