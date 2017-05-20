import { SET_SEARCH_TERM } from './constants'

const initalState = {
  searchTerm: ''
}

export const searchReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.payload })
    default:
      return state
  }
}
