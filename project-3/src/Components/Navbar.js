import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import { NoEncryption } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color:'rgb(119, 126, 119)',

        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    custom:{
        display: 'none'
    }
}));



export default function SearchAppBar() {
    const classes = useStyles();

    const location = useLocation();
    if( location.pathname ==='/'){
        var appBarStyle={
            backgroundColor: 'transparent',
            boxShadow: 'none',
        }
    }else{
        var appBarStyle = {
            display: 'none',
        };
    }
        
    return (
        <div className={classes.root}>
            <AppBar style={appBarStyle} position="fixed">
                <Toolbar>
                    <IconButton
                              style={{color: 'Red'}}

                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Joo-Tay
          </Typography>
                    <Typography className='typography'>
                        <Link to="/"><button className='home_button'>Home</button></Link>
                    </Typography>

                    <Typography className='typography'>
                        <Link to="/products"><button className='products_button'>Products</button></Link>
                    </Typography>

                    <Typography className='typography'>
                        <Link to="/cart"><button className='cart_button'>Cart</button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
