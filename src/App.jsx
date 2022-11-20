import { Container, Box, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";
import { useScrollTo } from "react-use-window-scroll";
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import "./App.css";

function App() {
  
  const scrollTo = useScrollTo();
  const handelClick = () => {
    scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <>
      <Navbar />
      <Container sx={{ height: "100vh", pt: 50 }}>
        <Typography variant="h1" color="whitesmoke">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon onClick={ handelClick } />
      </Container>
      <Container sx={{ height: "100vh", pt: 50 }}>
        <Box sx={{ mx: "20%", my: "auto" }}>
          <InView
            as="section"
            className="text-1-1"
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
          </InView>
          <InView
            as="section"
            className="text-1-2"
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
            <Typography variant="h5">
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