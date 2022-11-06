import { Container, Typography } from "@mui/material";
import { InView } from "react-intersection-observer"; 
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import Page1 from "./pages/Page1";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <Container sx={{ height: "110vh", pt: 50 }}>
        <Typography variant="h1">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon />
      </Container>
      <InView as="section" onChange={(inView, entry) => {
        if (inView) {
          // Scroll to the Page1 component
          entry.target.scrollTo(0, 0);
          console.log("Page1");
        }
      }}>
        <Page1 />
      </InView>
    </>
  );
}

export default App;
