import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import TaskContext from './Context/TaskContext.jsx'
import AuthProvider from './Context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(

  <AuthProvider>
      <App />
  </AuthProvider>

)
