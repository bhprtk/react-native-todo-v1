import { AsyncStorage } from 'react-native';

export default async function storeCurrentUser(data) {
	const currentUser = JSON.stringify(data)
	try {
		await AsyncStorage.setItem('@Errands:currentUser', currentUser);
	} catch (error) {
		console.log ('error:', error)
	}
	return;
}


// 10155616935412720
