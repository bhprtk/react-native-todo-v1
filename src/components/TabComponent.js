import React, { Component } from 'react';
import {
	Dimensions,
	View,
	ScrollView,
	StyleSheet,
	Text
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import Swiper from 'react-native-swiper';
import SelectDate from './swipableComponents/SelectDate';
import DisplayTodoComponent from './swipableComponents/DisplayTodoComponent';
import AddTodoComponent from './swipableComponents/AddTodoComponent';

import Drawer from 'react-native-drawer'
import DrawerComponent from './DrawerComponent';
import * as Animatable from 'react-native-animatable';

class TabComponent extends Component {
	state = {
		openDrawer: false
	}

	scroll = () => {
		console.log('scroll')
	}

	_openDrawer = () => this.setState({ openDrawer: true })

	_onDrawerClose = () => {
		console.log('close the drawer')
	}

	render() {
		// var {height, width} = Dimensions.get('window');
		// console.log ('height:', height)
		// console.log ('width:', width)
		console.log ('this.state.openDrawer:', this.state.openDrawer)
		return (
			<Swiper
				loop={false}
				index={1}
				showsPagination={false}>
				<SelectDate />
				<DisplayTodoComponent
					openDrawer={this._openDrawer}/>

				<AddTodoComponent />
			</Swiper>

		)
	}
}

export default TabComponent;
