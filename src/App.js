/**
 * Set up redux store and react-redux Provider in this file
 */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import TodoList from './TodoList';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
	return (
		<Provider store={store}>
			<TodoList />
		</Provider>
	)
}

export default App;
