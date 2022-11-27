import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { red } from "@mui/material/colors";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ColorModeContext } from './comps/theme'
import "./index.css"


function ToggleTheme() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  
  const theme = React.useMemo(() =>
    createTheme(
      {
        palette: {
          mode,
          primary: {
            ...(mode === "light" ? { main: red[900] } : { main: red[500] }),
            contrastText: "#fff",
          },
          secondary: {
            ...(mode === "light" ? { main: red[900] } : { main: red[500] }),
            contrastText: "#fff",
          },
        },
        typography: {
          h1: {
            color: red[900],
            weight: "bold",
          },
        },
      },
      [mode]
    )
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleTheme />
  </React.StrictMode>
)
