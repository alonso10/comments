import { createStore, combineReducers } from 'redux';
import addPost from './reducers/addPost';
import addComment from './reducers/addComment';
import handleModal from './reducers/handleModal';
import { data } from './data/initialData';

const reducer = combineReducers({
    post: addPost,
    modal: handleModal
});

const initialState = {
    post: {
        ...data
    },
    modal: {
        visible: false,
        postId: null
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
