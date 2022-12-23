import { Button,  } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import "./interactivtank.css";
import { Container } from "@mui/system";

//--------IMG-----------
import Tankback from '../assets/img/Tank/tank.png';
import Turretlayer from '../assets/img/Tank/turred.png';
import Wheelplate from '../assets/img/Tank/wheel.png';
import Front from '../assets/img/Tank/front.png';
import Window from '../assets/img/Tank/window.png';
import Shootingslid from '../assets/img/Tank/shootingslid.png';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




function cahngeOpacity1() {
    turret.target.style.opacity='1';
  }



  
  
const Tank = () => {
    
    return (
        <>
            <div className="background">
                <img src={Tankback} width="100%" height="100%" />
                <div>
                    <img  className="layers" src={Turretlayer} width="100%" height="100%" />
                    <img  className="layers" src={Wheelplate} width="100%" height="100%" />
                    <img  className="layers" src={Front} width="100%" height="100%" />
                    <img  className="layers" src={Window} width="100%" height="100%" />
                    <img  className="layers" src={Shootingslid} width="100%" height="100%" />
                </div>

                {
                    // Button
                }

            </div>
            <Container sx={{ display: "flex", gap: 3, justifyContent: "space-between" }}>
                <Button className="tankbutton" id="turd" variant="contained">Turret</Button>
                <Button className="tankbutton" id="armour" variant="contained">Armor</Button>
                <Button className="tankbutton" id="bumper" variant="contained">Contained</Button>
                <Button className="tankbutton" id="gunslot" variant="contained">Contained</Button>
                <Button className="tankbutton" id="window" variant="contained">Contained</Button>
                
            </Container>

            {
                // Text
                <p></p>
            

            }

        
        </>
    );
}

export default Tank;