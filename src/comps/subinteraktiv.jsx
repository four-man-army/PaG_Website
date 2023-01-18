import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./interactivtank.css";
import { Container } from "@mui/system";

//--------IMG-----------

import Boat from "../assets/img/Sub/back.png";
import Engin from "../assets/img/Sub/Engin.png";
import Crew from "../assets/img/Sub/Crew.png";
import Fule from "../assets/img/Sub/fule.png";
import Cargo from "../assets/img/Sub/Cargo.png";

const images = [
  { image: Engin, name: "Motor", ref: null },
  { image: Crew, name: "Crew", ref: null },
  { image: Cargo, name: "Fracht", ref: null },
  { image: Fule, name: "Treibschtoff", ref: null },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NarcoSubs = () => {

    const resetImg = () => {
        images.map((image) => {
            image.ref.style.opacity = 0;
        })
    }

  return (
    <>
      <div className="background">
        <img src={Boat} width="100%" height="100%" />
        <div>
          {images.map((image, index) => (
            <img
              className="layers"
              ref={(el) => (image.ref = el)}
              src={image.image}
              width="100%"
              height="100%"
            />
          ))}
        </div>
        
        {
          // Button
        }
      </div>
      <Container
        sx={{ display: "flex", gap: 3, justifyContent: "space-between" }}
      >
        {images.map((image, i) => (
          <Button
            className="tankbutton"
            key={i}
            onClick={() => {
                resetImg();
                image.ref.style.opacity = 1;
            }}
            variant="contained"
          >
            {image.name}
          </Button>
        ))}
      </Container>

      {
        // Text
      }
    </>
  );
};

export default NarcoSubs;