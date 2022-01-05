// 참고 코드
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import HomePage from '../pages/home-page'
import FoodPage from '../pages/food-page'
import TrailPage from '../pages/trail-page'
import NotFoundPage from '../pages/404-page'

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
        <Route path="/404" element={<NotFoundPage />} exact />
        <Route path="/select-food" element={<FoodPage />} exact />
        <Route path="/select-trail-course" element={<TrailPage />} exact />
        <Route component={NotFoundPage} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;