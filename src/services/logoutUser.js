import { AsyncStorage } from 'react-native';

export default async function logoutUser() {
	try {
		const data = JSON.stringify({ noUser: true });
		await AsyncStorage.setItem('@Errands:currentUser', data);
	} catch (error) {
		console.log ('error:', error)
	}
	return;
}
