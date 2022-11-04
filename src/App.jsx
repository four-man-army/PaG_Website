import { Container, Typography } from "@mui/material"
import Navbar from "./navbar"

function App() {

  return (
    <>
    <Navbar />
    <Container sx={{height:"150%", pt:50}}>
      <Typography variant="h1">Eine Reise durch den mexikanischen Drogenkrieg</Typography>
    </Container>
    </>
  )
}

export default App
