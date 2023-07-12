import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthWrapper } from './context/auth.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthWrapper>
)
