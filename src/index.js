import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'

import './index.css'
import App from './components/app'
import Routes from './routes'

ReactDOM.render(
  <Routes store={configureStore()}>
    <App />
  </Routes>,
  document.getElementById('root')
)
