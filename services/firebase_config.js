import firebase from 'firebase';
import moment from 'moment';

const convertDayToKey = day => moment(day).format('MM-DD-YYYY');

export function addTodo(selectedDay, todo) {
	const day = convertDayToKey(selectedDay);
	const now = moment().format();

	firebase
		.database()
		.ref(`${day}/${now}`)
		.set(todo)
}

export function deleteTodo({ selectedDay, todoKey }) {
	const day = convertDayToKey(selectedDay);
	firebase
		.database()
		.ref(`${day}/${todoKey}`)
		.remove()
}

export function editTodo(todo, selectedDay, todoKey) {
	const day = convertDayToKey(selectedDay);
	let updates = {};
	updates[`/${day}/${todoKey}`] = todo;
	firebase
		.database()
		.ref()
		.update(updates)
}

export function getSelectedDayTodos(selectedDay) {
	const day = convertDayToKey(selectedDay);
	return (
		firebase
			.database()
			.ref(`${day}`)
			.once('value')
			.then(snap => snap.val())
		)
}

export function toggleCheckbox(data) {
	const { selectedDay, todoKey, value } = data;
	const day = convertDayToKey(selectedDay);
	let updates = {};
	updates[`${day}/${todoKey}/done`] = value;
	firebase
		.database()
		.ref()
		.update(updates)
}
