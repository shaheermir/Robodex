import React from 'react'
import ReactDOM from 'react-dom'
import App from './Containers/App'
import './index.css'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { searchReducer, robotsReducer } from './reducers'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const logger = createLogger()

const rootReducer = combineReducers({
  search: searchReducer,
  robots: robotsReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
