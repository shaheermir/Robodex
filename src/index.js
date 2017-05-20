import 'tachyons'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './Containers/App/App'
import Profile from './Containers/Profile/Profile'
import createStore from './store'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/profile/:id' component={Profile} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
