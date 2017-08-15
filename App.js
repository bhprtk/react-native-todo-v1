import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import { Font } from 'expo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';

import firebase from 'firebase';

import configureStore from './src/store';
import Main from './src/components/Main';
import types from './src/actions/types';

import './src/services/FirebaseInit.js';

console.ignoredYellowBox = ['Setting a timer'];

const store = configureStore();

firebase
	.database()
	.ref()
	.on('value', snapshot => {
    let todos = snapshot.val();
    store.dispatch({
				type: types.ON_CHANGE_TODOS,
				data: {
					todos,
					selectedDay: store.getState().selectedDay.toJS().selectedDay
				}
			})
	});


export default class App extends Component {
	state = {
	 	fontLoaded: false,
 	};
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      // 'Arial': require('native-base/Fonts/Arial.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
			'PassionOne': require('./assets/fonts/PassionOne-Regular.ttf'),
			'ShadowsIntoLight': require('./assets/fonts/ShadowsIntoLight.ttf'),
			'ChelseaMarket': require('./assets/fonts/ChelseaMarket-Regular.ttf'),
			'Gurajada': require('./assets/fonts/Gurajada-Regular.ttf'),
			'Kalam': require('./assets/fonts/Kalam-Regular.ttf'),
			'Overlock': require('./assets/fonts/Overlock-Black.ttf'),
			'Pompiere': require('./assets/fonts/Pompiere-Regular.ttf'),
			'Ramabhadra': require('./assets/fonts/Ramabhadra-Regular.ttf'),
    });
		this.setState({
			fontLoaded: true,
		});
  }
  render() {
		if(this.state.fontLoaded) {
			return (
				<Provider store={store}>
					<ThemeProvider>
						<Main />
					</ThemeProvider>
				</Provider>
			)
		} else {
			return (
				<View>
					<Text>
						Loading Fonts ...
					</Text>
				</View>
			)
		}
  }
}
