import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes';

const initialState = {
  publications: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_POST: {
      const { publications } = state;
      const post = [
        ...publications,
        {
          ...payload
        }
      ];
      return {
        publications: post
      };
    }
    case ADD_COMMENT: {
      const { publications } = state;
      const post = publications.find(value => {
        return value.id === payload.postId;
      });
      const index = publications.findIndex(value => {
        return value.id === payload.postId;
      });
      const { id, name, date, text } = payload;
      post.comments.push({ id, name, date, text });
      const data = [
        ...publications.slice(0, index),
        Object.assign({}, publications[index], {
          ...post
        }),
        ...publications.slice(index + 1)
      ];
      return {
        publications: data
      };
    }
    default:
      return state;
  }
}

export default reducer;
