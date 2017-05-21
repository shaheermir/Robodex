process.env.NODE_ENV = 'production'

require('babel-register')({
  extensions: ['.js'],
  presets: ['es2015', 'react-app']
})
require('ignore-styles')

const { createElement } = require('react')
const { renderToString } = require('react-dom/server')
const { Provider } = require('react-redux')
const App = require('./Containers/App/App').default
const createStore = require('./store').default
const express = require('express')
const fs = require('fs')
const compression = require('compression')

const initialContent = fs.readFileSync('./build/index.html', 'utf-8')

const store = createStore()

const render = () => {
  const DOMContent = renderToString(
    createElement(Provider, {store: store},
      createElement(App)
    )
  )

  const state = JSON.stringify(store.getState())

  return initialContent
    .replace('<span id="SSR_CONTENT"/>', DOMContent)
    .replace('INITIAL_STATE_JSON', state)
}

let markup = render()

let wasPending = store.getState().robots.isPending
const unsubscribe = store.subscribe(() => {
  const state = store.getState()
  const isPending = state.robots.isPending

  if (wasPending && !isPending) {
    markup = render()
    unsubscribe()
    return
  }

  wasPending = isPending
})

const app = express()
const PORT = process.env.PORT || 3000

const serveContent = (req, res) => res.send(markup)

app.use(compression())
app.get('/', serveContent)
app.get('/index.html', serveContent)

app.use(express.static('./build'))
app.use((req, res) => res.redirect('/'))

app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT)
})
