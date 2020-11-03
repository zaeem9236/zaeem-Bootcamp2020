import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '900px',
        margin: '0 auto',
        // border: '5px solid Red',
        // display: 'flex',
        // justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridContainer: {
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    gridItems: {
    }
}));

export default function Summary() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={4} className={classes.gridItems}>
                    <Paper className={classes.paper}>
                        <div className='confirmed'>
                            <div className='confirmed_numbers'>
                                <p className='confirmed_numbers_text'>4561</p>
                            </div>
                            <div className='confirmed_title'><p>Confirmed</p></div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <div className='recovered'>
                            <div className='recovered_numbers'>
                                <p className='recovered_numbers_text'>1357</p>
                            </div>
                            <div className='recovered_title'><p>Recovered</p></div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                    <div className='death'>
                            <div className='death_numbers'>
                                <p className='death_numbers_text'>4561</p>
                            </div>
                            <div className='death_title'><p>Confirmed</p></div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
