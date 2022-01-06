// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { basename } from './config'
import App from './components/App'

import UserInfoContext from './store/user-info-context'
import UserHealthInfoContext from './store/user-health-info-context'

const renderApp = () => (
  // 추가
  <UserInfoContext>
    <UserHealthInfoContext>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </UserHealthInfoContext>
  </UserInfoContext>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    require('./components/App')
    render(renderApp(), root)
  })
}
