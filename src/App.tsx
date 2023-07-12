import { Route } from 'wouter'
import './App.css'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <>
      <Route path='/login' component={LoginPage} />
    </>
  )
}

export default App
