import { ADD_NAME } from "../actions/actionTypes";

const initialState = {
  name: ''
};

function modal(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NAME:
      return payload.name;
    default:
      return state;
  }
}

export default modal;