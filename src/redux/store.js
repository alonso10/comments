import { createStore, combineReducers } from 'redux';
import { data } from './data/initialData';

const reducer = combineReducers({});

const store = createStore(
    reducer,
    data,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
