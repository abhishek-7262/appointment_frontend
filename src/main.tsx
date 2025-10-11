//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './lazy/root'
import { SnackbarProvider } from "notistack"
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <SnackbarProvider>
    <Router>
      <App />
    </Router >
  </SnackbarProvider>
)
