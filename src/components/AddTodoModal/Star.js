import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Star extends Component {
	render() {
		const { starred, toggleStar } = this.props;
		let star;
		if(starred) {
			star = (
				<FontAwesome
					name="star"
					size={45}
					color="#FFD700"
					style={{
						marginLeft: 10
					}}
					/>
			)
		} else {
			star = (
				<FontAwesome
					name="star-o"
					size={45}
					style={{
						marginLeft: 10
					}}
					/>
			)
		}
		return (
			<TouchableOpacity
				onPress={toggleStar}
				style={{
					backgroundColor: '#fff',
					borderColor: '#fff',
					borderWidth: 2,
					height: 60,
					marginTop: 10,
					justifyContent: 'center',
					paddingRight: 10,
					paddingLeft: 10,
				}}>
				<View style={{
						flexDirection: 'row'
					}}>
					<View style={{
							flex: 1,
							justifyContent: 'center',

						}}>
						<Text
							style={{
								color: '#ccc',
								fontSize: 18,
								fontWeight: 'bold',
							}}>
							Important
						</Text>
					</View>
					<View style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<Text style={{
								color: '#9E9E9E',
								fontWeight: 'bold',
							}}>
							{star}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

export default Star;
