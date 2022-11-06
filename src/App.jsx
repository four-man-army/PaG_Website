import { Container, Typography } from "@mui/material";
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import Page1 from "./pages/Page1";


function App() {

  return (
    <>
      <Navbar />
      <Container sx={{ height: "110%", pt: 50}}>
        <Typography variant="h1" color="whitesmoke">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon />
      </Container>
      <Page1/>
    </>
  );
}

export default App
