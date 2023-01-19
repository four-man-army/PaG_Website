import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Speed from '../../assets/img/Sub/speedboat.jpeg';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title="Speed Boat"
        subheader="1980er Jahre"
      />
      <CardMedia
        component="img"
        height="194"
        image={Speed}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        In den 1980er Jahren waren Schnellboote die erste Wahl von Drogen Schmugglern, obwohl diese gut sichtbar sind und auch leicht abgefangen werden konnten. Dies war nur möglich da es den so genanten Krieg gegen Drogen noch nicht gab und daher die Mexikanische so wie Amerikanische Navy nicht zum stoppen von Drogen eingesetzt wurde. Konnten die Schmuggler einfach weg fahren. 
        </Typography>
      </CardContent>
     
    </Card>
  );
}
