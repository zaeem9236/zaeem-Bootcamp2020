import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '700px',
        // margin: '0 auto',
        // border: '1px solid Red'
    },
    paper: {
        padding: theme.spacing(8),
        minWidth: '650px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridContainer: {
        // border: '1px solid Red',
        display: 'flex',
        flexDirection: 'column',
        height: '80vh'
    },
    gridItems: {
        display: 'flex',
        alignItems: 'center',
        // border: '1px solid Red'
    }
}));


function SummaryView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.gridContainer}>
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