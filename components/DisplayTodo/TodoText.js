import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

class TodoText extends Component {
	render() {
		const { done, todo, starred, startTime } = this.props;
		let textDecor, color, important, time;

		if(startTime !== "0:00 am") {
			time = (
				<Text style={{
						fontSize: 12,
						fontWeight: 'bold',
						fontStyle: 'italic',
						color: '#ccc'
					}}>
					{startTime}
				</Text>
			)
		}

		if(starred) {
			important = (
				<View style={{
						flexDirection: 'row',
						alignItems: 'center'
					}}>
					<Text style={{
							fontSize: 12,
							fontWeight: 'bold',
							fontStyle: 'italic',
							color: '#ccc',
							paddingRight: 5
						}}>
						Important
					</Text>
						<FontAwesome
							name="star"
							size={15}
							color="#FFD700"
							/>

				</View>
			)
		}

		if(done) {
			textDecor = "line-through";
			color= "#ccc";
		} else {
			textDecor = "none";
			color = "#9E9E9E";
			// color = "#78909C";
		}



		return (
			<View style={{
					flex: 4,
					justifyContent: 'center',
					paddingLeft: 10
				}}>

				{time}

				<Text style={{
						fontSize: 20,
						fontWeight: 'bold',
						color: `${color}`,
						textDecorationLine: `${textDecor}`
					}}>
					{todo}
				</Text>

				{important}

			</View>
		)
	}
}

export default TodoText;
