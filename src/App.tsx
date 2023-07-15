import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import IsPrivate from './hoc/IsPrivate'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <IsPrivate>
              <Home />
            </IsPrivate>
          }
        />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
