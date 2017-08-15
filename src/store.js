import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const reducer = () => {};

export default function configureStore() {
	const store = createStore(
		rootReducer,
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(sagaMiddleware)
	);
	store.runSaga = sagaMiddleware.run(sagas);
	return store;
}
