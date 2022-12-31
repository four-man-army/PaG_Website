import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Speed from '../assets/img/Sub/speedboat.jpeg';

const MediaCard = () => {
  return (
    <Card sx={{}}>
      <CardMedia
        sx={{ height: "100%" }}
        image={Speed}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Speed Boat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In den 1980er Jahren waren Schnellboote die erste Wahl von Drogen Schmugglern, obwohl diese gut sichtbar sind und auch leicht abgefangen werden konnten. Dies war nur möglich da es den so genanten Krieg gegen Drogen noch nicht gab und daher die Mexikanische so wie Amerikanische Navy nicht zum stoppen von Drogen eingesetzt wurde. Konnten die Schmuggler einfach weg fahren. 

        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;