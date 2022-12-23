import { Button,  } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import "./interactivtank.css";
import { Container } from "@mui/system";

//--------IMG-----------
import Tankback from '../assets/img/Tank/tank2.png';
import Turretlayer from '../assets/img/Tank/tabbnk.png';
import Wheelplate from '../assets/img/Tank/wheel.png';
import Front from '../assets/img/Tank/front.png';
import Window from '../assets/img/Tank/window.png';
import Shootingslid from '../assets/img/Tank/shootingslid.png';

const images = [ {image: Turretlayer, name: "Turret"}, {image: Wheelplate, name: "Armor"}, {image: Front, name: "Bumper"}, {image: Window, name: "Window"}, {image: Shootingslid, name: "Gunslot"}];



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
  
  
const Tank = () => {
    
    return (
        <>
            <div className="background">
                <img src={Tankback} width="100%" height="100%" />
                <div>
                    {
                        images.map((image, index) => (
                            <img  className="layers" src={image.image} width="100%" height="100%" />
                        ))
                    }
                </div>

                {
                    // Button
                }

            </div>
            <Container sx={{ display: "flex", gap: 3, justifyContent: "space-between" }}>
                {
                    images.map((image, i) => <Button className="tankbutton" key={i} variant="contained">{image.name}</Button>)
                }
                
            </Container>

            {
                // Text
            }

        
        </>
    );
}

export default Tank;