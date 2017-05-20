import { apiCall } from './api/api'
import {
  SET_SEARCH_TERM,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_ERROR
} from './constants'

export const setSearchTerm = text => ({
  type: SET_SEARCH_TERM,
  payload: text
})

export const requestRobots = dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })

  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_ERROR, payload: err }))
}
