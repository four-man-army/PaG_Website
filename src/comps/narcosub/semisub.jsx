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
                        Im Jahr 2006 wurde ein U-Boot 166 km südwestlich von Costa Rica beschlagnahmt.
                        Die US-Küstenwache nannte sie Bigfoot, weil sie Gerüchte über ihre Existenz gehört,
                        aber nie welche gesehen hatte. Im Jahr 2006 entdeckten die USA insgesamt drei Schiffe,
                        und ihre beste Schätzung war, dass 2007 fünfundzwanzig oder vielleicht vierzig Halb-U-Boote
                        von Südamerika abfuhren.
                    </Typography>
                    <Typography paragraph>
                        Im Jahr 2008 entdeckten die Behörden zehn pro Monat, aber nur einer von zehn wurde abgefangen.
                        In den ersten sechs Monaten des Jahres 2008 entdeckten die US-Küstenwache und die US-Marine
                        42 U-Boote vor den Küsten Mittelamerikas, aber es kam zu wenigen Beschlagnahmungen. Laut verschiedenen
                        Pressemitteilungen könnten bis Ende 2008 bei geschätzten 85 Ereignissen etwa 544 Tonnen Kokain an
                        US-Kunden gelangen. Im Jahr 2008 hat die mexikanische Marine ein 10 m langes U-Boot in internationalen
                        Gewässern etwa 200 km südwestlich von Oaxaca abgefangen. Spezialeinheiten der mexikanischen Marine ließen
                        sich von einem Hubschrauber auf dessen Deck ab und verhafteten vier Schmuggler. Laut einer Pressemitteilung
                        beförderte das Schiff 5,3 Tonnen Kokain; es wurde von einem Patrouillenboot der mexikanischen Marine nach Huatulco,
                        Oaxaca, geschleppt. Außerdem eroberte die US-Küstenwache 2008 ein Halbtauchboot in internationalen Gewässern, etwa 563 km
                        westlich von Guatemala. es trug sogar sieben Tonnen Kokain. Das 18 m  lange Stahl-/Fiberglasschiff wurde von einem Flugzeug
                        der US Navy im Rahmen der Operation Panama Express entdeckt und von der Coast Guard Law Enforcement Detachment 402 an Bord
                        der USS McInerney abgefangen. Fünf Tage später wurde ein 18 m langes Halbtauchboot in internationalen Gewässern von der
                        US-Küstenwache Midgett etwa 322 km südlich von Guatemala beschlagnahmt. Nur wenige andere U-Boote wurden beschlagnahmt,
                        weil ihre Besatzungen sie beim Abfangen versenkten.
                    </Typography>
                    <Typography paragraph>
                        In 2009, the U.S. detected "as many as sixty" submarine related events, and calculated they were moving as much as a ton of
                        cocaine daily. In the same year, three submarines were seized on the shores of the Pacific coast, loaded with 1.5 tons of cocaine.
                        The Colombian navy had intercepted or discovered thirty-three submarines by 2009.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
