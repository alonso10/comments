import { ADD_POST, ADD_COMMENT, ADD_REACTION } from '../actions/actionTypes';

const initialState = {
  publications: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_POST: {
      if (payload.text !== "") {
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
      } else {
        return state;
      }
    }
    case ADD_COMMENT: {
      const { id, name, date, text, postId } = payload;
      if (text !== "") {
        const { publications } = state;
        const index = publications.findIndex(value => {
          return value.id === postId;
        });
        const post = publications[index];
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
      } else {
        return state;
      }
    }
    case ADD_REACTION: {
      const { publications } = state;
      const index = publications.findIndex(value => {
        return value.id === payload.postId;
      });
      const post = publications[index];
      const { reactions } = post;
      post.reactions = reactions + 1;
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
