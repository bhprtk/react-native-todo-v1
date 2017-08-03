import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import Nav from './Nav';

import { BottomNavigation } from 'react-native-material-ui';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class BottomNavigationComponent extends Component {
	render() {
		const { changeNav } = this.props;
		return (
			<View
				style={{
					backgroundColor: '#fafafa',
					height: 60,
					flexDirection: 'row',
					justifyContent: 'center'
				}}>
				<TouchableOpacity
					onPress={() => changeNav('today')}
					style={{
						flex: 1,
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center'
					}}>
					<MaterialIcons
						name="today"
						size={30}
						color='#78909C'
						/>
					<Text
						style={{
							color: '#9E9E9E',
							fontWeight: 'bold'
						}}>
						Today
					</Text>

				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeNav('important')}
					style={{
						flex: 1,
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center'
					}}>
					<FontAwesome
						name="star"
						size={30}
						color="#FFD700"
						/>
					<Text
						style={{
							color: '#9E9E9E',
							fontWeight: 'bold'
						}}>
						Important
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeNav('not-done')}
					style={{
						flex: 1,
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center'
					}}>
					<MaterialCommunityIcons
						name="checkbox-blank-outline"
						size={30}
						color="#9bc0b0"
						/>
					<Text
						style={{
							color: '#9E9E9E',
							fontWeight: 'bold'
						}}>
						Not Done
					</Text>

				</TouchableOpacity>

	</View>
		)
	}
}

export default BottomNavigationComponent;
