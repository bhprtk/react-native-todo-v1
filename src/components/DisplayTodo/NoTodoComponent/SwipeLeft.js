import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	View
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

class SwipeLeft extends Component {
	render() {
		return (
			<View style={{
					backgroundColor: 'red',
					flexDirection: 'row'
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1
				}}>
				<Animatable.View
					animation="rubberBand"
					iterationCount="infinite">

					<FontAwesome
						name="hand-o-left"
						color='#fff'
						size={50}
						/>

				</Animatable.View>

					<Text style={{
							fontSize: 18,
							color: '#696969',
							paddingLeft: 10
						}}>
						Swipe left to add a new task
					</Text>

			</View>
		)
	}
}

export default SwipeLeft;
