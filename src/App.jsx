import { Container, Box, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import video from "./assets/video/Mexico-drugwar.mp4";
import "./App.css";
import Theme from "./comps/theme";
import RecipeReviewCard from "./comps/narcosub/speedboat";
import SemiSub from "./comps/narcosub/semisub";
import NarcoSubs from "./comps/subinteraktiv";
import Tanktext from "./comps/tanktext";
import Tank from "./comps/interactivtank";
import Cartell from "./comps/cartell";
import Staat from "./comps/staat";



function App() {

  return (
    <>
      <Theme />
      <Navbar />
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Container sx={{ height: "110vh", pt: "20%" }}>
        <div id="titleContainer">
        <h1 id="title">
          Eine Reise durch den <br/> 
          mexikanischen Drogenkrieg
        </h1>
        </div>
        <Scrollicon  />
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
          <Cartell />
          <Tanktext />
        </Box>
        <Box sx={{ mx: "15%", my: "auto", pb: 10 }}>
          <Tank />
        </Box>
        <Box sx={{ mx: "20%", my: "auto" }}>



          <RecipeReviewCard />
          <SemiSub />
        </Box>
        <Box sx={{ mx: "15%", my: "auto", pb: 10 }}>
          <NarcoSubs />
        </Box>
        <Box sx={{ mx: "20%", my: "auto" }}>
          <Staat />
        </Box>

      </Container>

    </>
  );
}

export default App;