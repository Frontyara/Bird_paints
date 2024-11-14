import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ReduxState } from './redux/ReduxState'
import React from 'react'

export const ReduxStateContext = React.createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxStateContext.Provider value={ReduxState}>
      <App />
    </ReduxStateContext.Provider>
  </StrictMode>,
)
