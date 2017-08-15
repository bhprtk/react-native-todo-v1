import Expo from 'expo';
import { AsyncStorage } from 'react-native';

import storeCurrentUser from './storeCurrentUser';

export const facebookLogin = () => {
	return Expo.Facebook.logInWithReadPermissionsAsync('257894148058223', {
      permissions: ['public_profile', 'email'],
    })
		.then(data => {
			console.log ('data after expo:', data)
			const { type, token } = data;
			if(type === 'success') {
				return (
					fetch(`https://graph.facebook.com/me?access_token=${token}`)
					.then(response => response.json())
					.then(data => storeCurrentUser(data))
				)
			}
		})
		.catch(error => console.log ('error:', error))
}
