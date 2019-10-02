import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionTypes";

const initialState = {
  visible: false,
  postId: null,
};

function modal(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        visible: true,
        postId: payload.postId
      };
    case CLOSE_MODAL:
        return {
          visible: false,
          postId: payload.postId
        };
    default:
      return state;
  }
}

export default modal;
