import { Container, Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer'; 
import Scrollicon from "./comps/Scroll-Icon";
import Navbar from "./comps/navbar";
import Page1 from "./pages/Page1";
import "./App.css";

function App() {
  const {ref: p1ref , inVew: p1IsVisible} = useInView();
  console.log('p1IsVisible', p1IsVisible); 

  return (
    <>
      <Navbar />
      <Container sx={{ height: "120%", pt: 50 }}>
        <Typography variant="h1">
          Eine Reise durch den mexikanischen Drogenkrieg
        </Typography>
        <Scrollicon />
      </Container>
      <section ref={p1ref} >
        <Page1 />
      </section>
    </>
  );
}

export default App;
