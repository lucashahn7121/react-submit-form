import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './features/store'
import { Provider } from 'react-redux'

import './index.css'

async function start() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()
