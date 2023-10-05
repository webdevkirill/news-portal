import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'

export const App = () => {
  const {theme, handleToggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <button onClick={handleToggleTheme}>Сменить тему</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/about' element={<AboutPageAsync />} />
            <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
