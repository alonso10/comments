import { ADD_COMMENT } from '../actions/actionTypes'

function reducer(state = {}, { type, payload }) {
  switch (type) {
    case ADD_COMMENT: {
      const { publications } = state
      publications.find(value => {
        return value.postId === payload.postId
      })
      return state
    }
    default:
      return state
  }
}

export default reducer
