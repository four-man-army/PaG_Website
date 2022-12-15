import { Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import Tankback from '../assets/img/Tank/tank.png';
import "./interactivtank.css";

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
                <img src={Tankback} width="1000" />
            </div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
        </>
    );
}

export default Tank;