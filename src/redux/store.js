import { createStore, combineReducers } from 'redux';
import addPost from './reducers/addPost';
import handleModal from './reducers/handleModal';
import addName from './reducers/addName';
import { data } from './data/initialData';

const reducer = combineReducers({
    post: addPost,
    modal: handleModal,
    name: addName
});

const initialState = {
    post: {
        ...data
    },
    modal: {
        visible: false,
        postId: null
    },
    name: ''
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
