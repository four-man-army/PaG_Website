import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"

const theme = createTheme({
  palette: {
    primary: {
      main: '#990000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#990000',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      color: '#990000'
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
