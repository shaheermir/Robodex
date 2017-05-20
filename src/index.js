import React from 'react'
import ReactDOM from 'react-dom'
import App from './Containers/App'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { searchReducer } from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger()

const store = createStore(searchReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
