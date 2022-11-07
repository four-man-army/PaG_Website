import { Container, Box, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ height: "110vh", pt: 50}}>
        <Typography variant="h1" color="whitesmoke">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon />
      </Container>
      <Container sx={{ height: "100vh", pt: 50 }}>
        <Box margin="auto 20% auto 20%">
          <InView
            as="section"
            onChange={(inView, entry) => {
              if (inView) {
                entry.target.classList.add("show");
                console.log("shown");
              } else {
                entry.target.classList.remove("show");
                console.log("hidden");
              }
            }}
          >
            <Typography variant="h3">Einführung</Typography>
            <Typography variant="h5" >
              Der Drogenkrieg in Mexiko ist schon längst im Gange und hat
              bereits tausende von Opfern gebracht...
            </Typography>
          </InView>
        </Box>
      </Container>
    </>
  );
}

export default App;