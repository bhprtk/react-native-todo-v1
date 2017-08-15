import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/creators';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

class FacebookLogin extends Component {

	_facebookSignIn = () => {
		const { actions } = this.props;
		actions.facebookLogin();
	}

	render() {
		const facebookColor = '#78909C';
		return (
			<TouchableOpacity
				onPress={this._facebookSignIn}
				style={{
					backgroundColor: facebookColor,
					// flex: 1,
					borderRadius: 5,
					flexDirection: 'row',
					borderWidth: 2,
					borderColor: facebookColor,
					// borderColor: '#fff',
					height: 60,
					// width: 200,
					alignSelf: 'center',
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
						name="facebook"
						color="#fff"
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
						Facebook
					</Text>

				</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);
