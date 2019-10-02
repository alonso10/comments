import { ADD_COMMENT } from '../actions/actionTypes';

function reducer(state = {}, { type, payload }) {
  switch (type) {
    case ADD_COMMENT: {
      console.log(state);
      const { publications } = state;
      const post = publications.find(value => {
        return value.postId === payload.postId;
      });
      console.log(post);
      return state;
    }
    default:
      return state;
  }
}

export default reducer;