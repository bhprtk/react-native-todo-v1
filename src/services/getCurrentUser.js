import { AsyncStorage } from 'react-native';
import initializeUser from './initializeUser';

export default async function getCurrentUser() {
	try {
		const currentUser = await AsyncStorage.getItem('@Errands:currentUser');
		if (currentUser !== null){
			return JSON.parse(currentUser)
		} else {
			await initializeUser();
			const currentUser = await AsyncStorage.getItem('@Errands:currentUser');
			return JSON.parse(currentUser)
		}
	} catch (error) {
		console.log ('error:', error)
	}

}
