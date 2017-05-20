import { createStore, applyMiddleware, combineReducers } from 'redux'
import { searchReducer, robotsReducer } from './reducers'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const logger = createLogger()
const rootReducer = combineReducers({
  search: searchReducer,
  robots: robotsReducer
})

const createAppStore = () => {
  const withLogger = process.env.NODE_ENV === 'development'
  const middleware = withLogger
    ? applyMiddleware(ReduxThunk, logger)
    : applyMiddleware(ReduxThunk)
  return createStore(rootReducer, middleware)
}

export default createAppStore
