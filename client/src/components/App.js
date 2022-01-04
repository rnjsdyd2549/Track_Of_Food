// 참고 코드
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { HomePage, NotFoundPage } from '../components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        {/* <Route path="/sample-page" component={SamplePage} /> */}
        <Route component={NotFoundPage} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;