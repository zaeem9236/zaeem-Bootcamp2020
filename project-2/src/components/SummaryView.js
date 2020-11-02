import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '1000px',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridItems: {
        border: '1px solid Red',
        // maxWidth: '300px',
    }
}));


function SummaryView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={4} className={classes.gridItems}>
                    <Paper className={classes.paper}>View 1</Paper>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.gridItems}>
                    <Paper className={classes.paper}>View 2</Paper>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.gridItems}>
                    <Paper className={classes.paper}>View 3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default SummaryView;