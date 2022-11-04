import { Container, Typography } from "@mui/material"
import Scrollicon from "./Scroll-Icon";
import Navbar from "./navbar"

function App() {

  return (
    <>
      <Navbar />
      <Container sx={{ height: "150%", pt: 50 }}>
        <Typography variant="h1">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon />
      </Container>
    </>
  );
}

export default App
