import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AnimatedNumber from "react-animated-numbers"


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

export default function Summary(props) {
    const classes = useStyles();

    var Confirmed = 0, Recovered = 0, Deaths = 0;

    if (props.globalCovidData.Countries !== undefined) { // check: Data is valid
        if (props.country === '-1') { //check: World Data
            Confirmed = props.globalCovidData.Global.TotalConfirmed;
            Recovered = props.globalCovidData.Global.TotalRecovered;
            Deaths = props.globalCovidData.Global.TotalDeaths;
        } else { //check: Selected Country Data
            Confirmed = props.globalCovidData.Countries[props.country].TotalConfirmed;
            Recovered = props.globalCovidData.Countries[props.country].TotalRecovered;
            Deaths = props.globalCovidData.Countries[props.country].TotalDeaths;
        }
    }
    console.log('Confirmed Cases', Confirmed)
    console.log('Recovered Cases', Recovered)
    console.log('Deaths Cases', Deaths)


    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={4} className={classes.gridItems}>
                    <Paper className={classes.paper}>
                        <div className='confirmed'>
                            <div className='confirmed_numbers'>
                                {/* <p className='confirmed_numbers_text'>{Confirmed}</p> */}
                                <div className='confirmed_numbers_text'>
                                    <AnimatedNumber
                                        fontStyle={{ fontFamily: "Nunito", fontSize: 50 }}
                                        animateToNumber={Confirmed}
                                        includeComma
                                        config={{ tension: 89, friction: 40 }}
                                        onStart={() => console.log("onStart")}
                                        onFinish={() => console.log("onFinish")}
                                    />
                                </div>
                            </div>
                            <div className='confirmed_title'><p>Confirmed</p></div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <div className='recovered'>
                            <div className='recovered_numbers'>
                                <div className='recovered_numbers_text'>
                                    <AnimatedNumber
                                        fontStyle={{ fontFamily: "Nunito", fontSize: 50 }}
                                        animateToNumber={Recovered}
                                        includeComma
                                        config={{ tension: 89, friction: 40 }}
                                        onStart={() => console.log("onStart")}
                                        onFinish={() => console.log("onFinish")}
                                    />
                                </div>
                            </div>
                            <div className='recovered_title'><p>Recovered</p></div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <div className='death'>
                            <div className='death_numbers'>
                                <div className='death_numbers_text'>
                                    <AnimatedNumber
                                        fontStyle={{ fontFamily: "Nunito", fontSize: 50 }}
                                        animateToNumber={Deaths}
                                        includeComma
                                        config={{ tension: 89, friction: 40 }}
                                        onStart={() => console.log("onStart")}
                                        onFinish={() => console.log("onFinish")}
                                    />
                                </div>
                            </div>
                            <div className='death_title'><p>Deaths</p></div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
