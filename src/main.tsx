import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './infrastructure/theme'
import './assets/index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
)

