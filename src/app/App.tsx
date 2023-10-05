import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

import { classNames } from 'shared/lib/classNames'

import { useTheme } from './providers/ThemeProvider'


export const App = () => {
  const {theme, handleToggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <button onClick={handleToggleTheme}>Сменить тему</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
