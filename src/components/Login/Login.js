import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import { Font } from 'expo';

import Entypo from 'react-native-vector-icons/Entypo';
import GoogleLogin from './GoogleLogin';
import FacebookLogin from './FacebookLogin';

class Login extends Component {
	render() {
			return (
				<View
					style={{
						flex: 1,
						backgroundColor: '#fff',
						// backgroundColor: '#78909C',
						alignItems: 'center',
						// justifyContent: 'center'
					}}>
					<View style={{
							marginTop: 50,
							// backgroundColor: 'green'
						}}>
						<Text
							style={{
								fontFamily: 'Gurajada',
								fontSize: 100,
								// color: '#78909C',
								color: '#BDBDBD',
							}}>
							errands
						</Text>

					</View>
					<View style={{
							// backgroundColor: '#222',
							paddingBottom: 40,
							paddingTop: 10,
							// height: 100
						}}>
						<Text
							style={{
								color: '#BDBDBD',
								fontWeight: 'bold',
								fontSize: 16
							}}>
							Get started with
						</Text>

					</View>


					<View style={{
							height: 140,
							paddingLeft: 10,
							paddingRight: 10,
							// backgroundColor: 'red',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}>

						<GoogleLogin />

						<View style={{
								borderBottomWidth: 1,
								borderBottomColor: '#BDBDBD'
							}}></View>

						<FacebookLogin />

					</View>

				</View>
			)
	}
}

export default Login;
