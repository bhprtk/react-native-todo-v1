import Expo from 'expo';
import storeCurrentUser from './storeCurrentUser';

export const googleLogin = () => {
	return Expo.Google.logInAsync({
		androidClientId: '34081274697-gjrqe2lkggack6htvkhciearte8e9ssd.apps.googleusercontent.com',
		// iosClientId: YOUR_CLIENT_ID_HERE,
		scopes: ['profile', 'email'],
	})
	.then(({ user }) => {
		const { id, name } = user;
		storeCurrentUser({ id, name });
	})
	.catch(error => console.log ('error:', error))
}
