import { Container, Box, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import video from "./assets/video/Mexico-drugwar.mp4";
import "./App.css";
import Theme from "./comps/theme";
import Tank from "./comps/interactivtank";
import Tanktext from "./comps/tanktext";



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
      <Container sx={{ height: "110vh", pt: 50 }}>
        <Typography variant="h1">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon />
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

           <Tanktext/>
           <Tank />
          </InView>
         
        </Box>  
        
        
      </Container>

    </>
  );
}

export default App;