import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import Important from './Important';
import Nav from './Nav';
import NotDone from './NotDone';
import Today from './Today';

import { BottomNavigation } from 'react-native-material-ui';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class BottomNavigationComponent extends Component {
	render() {
		const { activeNav, changeNav } = this.props;
		let activeToday, activeImportant, activeNotDone;
		let activeImportantFontSize;

		if(activeNav === 'today') {
			activeToday = true,
			activeImportant = false;
			activeNotDone = false;
		} else if(activeNav === 'important') {
			activeToday = false,
			activeImportant = true;
			activeNotDone = false;
		} else if(activeNav === 'not-done') {
			activeToday = false,
			activeImportant = false;
			activeNotDone = true;
		}
		// be more careful
		return (
			<View
				style={{
					backgroundColor: '#fafafa',
					height: 60,
					flexDirection: 'row',
					justifyContent: 'center'
				}}>

				<Today
					changeNav={changeNav}
					activeToday={activeToday}/>

				<Important
					changeNav={changeNav}
					activeImportant={activeImportant}/>

				<NotDone
					changeNav={changeNav}
					activeNotDone={activeNotDone}/>

	</View>
		)
	}
}

export default BottomNavigationComponent;
