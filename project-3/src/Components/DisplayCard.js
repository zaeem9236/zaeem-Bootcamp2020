import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 300,
        margin: '10px 6px'
    },
    media: {
        height: 210,
        display: "flex"
    },
});

export default function DisplayCard(props) {
    const classes = useStyles();
    console.log(props, 'propr')
    return (
        <Link to={`/products/${props.location}`} style={{textDecoration: 'none'}}  >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography  className='card_price' variant="body2" color="textSecondary" component="h1">
                            {props.price}
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button size="small" color="primary">
                    Share
        </Button> */}
                    <Button size="small" color="secondary">
                        {/* Learn More */}
        </Button>
                </CardActions>
            </Card>
        </Link>
    );
}
