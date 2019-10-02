import { ADD_POST, ADD_COMMENT, OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

let nextPostId = 2;
let nextCommentId = 3;

export const addPost = content => ({
  type: ADD_POST,
  payload: {
    id: ++nextPostId,
    ...content,
    reactions: 0,
    comments: []
  }
});

export const addComment = (postId, content) => ({
  type: ADD_COMMENT,
  payload: {
    id: ++nextCommentId,
    postId,
    ...content
  }
});

export const openModal = (postId) => ({
  type: OPEN_MODAL,
  payload: {
    postId
  }
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: {
    postId: null
  }
});
