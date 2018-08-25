import { createStore, combineReducers } from 'redux'
import listReducer from '../features/list/reducer'

const rootReducer = combineReducers({
	list: listReducer
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store