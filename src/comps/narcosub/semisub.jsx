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
import Semiub from '../../assets/img/Sub/semisub.jpeg';


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

export default function SemiSub() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                title="Semi Sub"
                subheader="2000s"
            />
            <CardMedia
                component="img"
                height="194"
                image={Semiub}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Da der Krieg gegen die Drogen bereits voll im gange war, wurden nun auch die Weltmeere besser kontrolliert. Daher waren "Normale Speedbaots" nicht mehr gut genug und wurden dur unterseebote ersetzt.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Im Jahr 2006 wurde der erste “Bigfoot”, wie die US-Küstenwache die U-Boote der
                        Mexikanischen Drogen Kartelle nannte, da sie viel darüber hörten aber nie eines Sahen,
                        166 km südwestlich von Costa Rica beschlagnahmt. Im Jahr 2006 entdeckten die USA insgesamt
                        drei Schiffe, und ihre beste Schätzung war, dass 2007 fünfundzwanzig oder vielleicht vierzig
                        Halb-U-Boote von Südamerika abfuhren.
                    </Typography>
                    <Typography paragraph>
                        Nach dem das erste Halb-U-Boot gesichtet wurde, war die Amerikanische Küstenwache so wie die Navy
                        alarmiert, daher wurden im Jahr 2008 etwa zehn U-Boote pro Monat entdeckt, allerdings konnten sie
                        nur eines von zehn abfangen. In den ersten sechs Monaten des Jahres 2008 entdeckten die US-Küstenwache
                        und die US-Marine 42 U-Boote vor den Küsten Mittelamerikas, aber es kam zu wenigen Beschlagnahmungen.
                        Laut verschiedenen Pressemitteilungen könnten bis Ende 2008 bei geschätzten 85 Ereignissen etwa 544 Tonnen
                        Kokain an US-Kunden gelangen.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
