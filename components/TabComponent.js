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


class TabComponent extends Component {
	scroll = () => {
		console.log('scroll')
	}
	render() {
		// var {height, width} = Dimensions.get('window');
		// console.log ('height:', height)
		// console.log ('width:', width)
		return (
			<Swiper
				loop={false}
				index={1}
				showsPagination={false}>
				<SelectDate />
				<DisplayTodoComponent />
				<AddTodoComponent />
			</Swiper>

		)
	}
}

export default TabComponent;
