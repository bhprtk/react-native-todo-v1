import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View
} from 'react-native';

const ActionButtons = ({ cancel, submitTodo, textBoxText }) => {
	let submitBgColor, submitTextColor, submitBorder;
	if(textBoxText) {
		submitBgColor = '#9bc0b0';
		submitTextColor = '#fff';
		submitBorder = '#9bc0b0';
	} else {
		submitBgColor = '#fff';
		submitTextColor = '#ccc';
		submitBorder = '#ccc';
	}
		return (
			<View style={{
					flex: 1,
					flexDirection: 'row',

					justifyContent: 'flex-end',
					paddingTop: 20,
					marginRight: 10
				}}>
				<TouchableOpacity
					onPress={submitTodo}
					style={{
						backgroundColor: `${submitBgColor}`,
						borderColor: `${submitBorder}`,
						borderWidth: 2,
						height: 45,
						alignItems: 'center',
						justifyContent: 'center',
						width: 100,
						marginRight: 10
					}}>
					<View style={{
							flexDirection: 'row'
						}}>
						<Text
							style={{
								color: `${submitTextColor}`,
								fontSize: 16,
								fontWeight: 'bold',
							}}>
							Submit
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={cancel}
					style={{
						borderColor: '#ccc',
						borderWidth: 2,
						height: 45,
						alignItems: 'center',
						justifyContent: 'center',
						width: 100
					}}>
					<View style={{
							flexDirection: 'row'
						}}>
						<Text
							style={{
								color: '#ccc',
								fontSize: 16,
								fontWeight: 'bold',
							}}>
							Cancel
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
}

export default ActionButtons;
