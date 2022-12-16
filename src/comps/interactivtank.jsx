import { Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import "./interactivtank.css";
import { Container } from "@mui/system";

//--------IMG-----------
import Tankback from '../assets/img/Tank/tank.png';
import Turedlayer from '../assets/img/Tank/tower.png';
import Wheelplate from '../assets/img/Tank/wheel.png';
import Freont from '../assets/img/Tank/front.png';
import Window from '../assets/img/Tank/windows.png';
import Shootingslid from '../assets/img/Tank/shootingslid.png';




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
                    <img id="turedlayer" className="layers" src={Turedlayer} width="100%" height="100%" />
                    <img className="layers" src={Wheelplate} width="100%" height="100%" />
                    <img className="layers" src={Freont} width="100%" height="100%" />
                    <img className="layers" src={Window} width="100%" height="100%" />
                    <img className="layers" src={Shootingslid} width="100%" height="100%"/>
                </div>


            </div>
            <Container sx={{ display: "flex", gap: 3, justifyContent: "space-between" }}>
                <Button className="tankbutton" id="tured" variant="contained" >Turet</Button>
                <Button className="tankbutton" id="armour" variant="contained">Armoure</Button>
                <Button className="tankbutton" id="bumper" variant="contained">Contained</Button>
                <Button className="tankbutton" id="gunslot" variant="contained">Contained</Button>
                <Button className="tankbutton" id="window" variant="contained">Contained</Button>
            </Container>
        </>
    );
}

export default Tank;