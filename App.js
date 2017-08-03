import React, { Component } from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { ThemeProvider } from 'react-native-material-ui';
import firebase from 'firebase';
import types from './actions/types';


import './services/FirebaseInit.js';
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

	firebase
		.database()
		.ref()
		.on('value', snapshot => {

		});



export default class App extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      // 'Arial': require('native-base/Fonts/Arial.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </Provider>
    )
  }
}
