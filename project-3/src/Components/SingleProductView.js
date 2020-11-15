import React, { useContext } from 'react';
import {CartManagement} from '../App';
import ShoesData from '../ShoesData';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import CartBadge from './CartBadge';


import { useParams } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    let routes = ['/', '/products', '/cart'];
    var products = useContext(ShoesData);
    var [cart, setCart] = useContext(CartManagement);
    // console.log(cart,'this 1');
    // console.log(setCart,'this 2');
    // let [cartItems, setCartItems] = useState('pehla item');
    // let cartMangement = createContext([cartItems, setCartItems]);
    // export { cartMangement };
    let { id } = useParams();
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />

            <List>
                {['Home', 'Products', 'Cart'].map((text, index) => (
                    <Link to={routes[index]} key={index} style={{ textDecoration: 'none', color: 'rgba(0,0,0,0.87)' }}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 ? <HomeIcon /> : ''}
                                {index === 1 ? <LocalMallIcon /> : ''}
                                {index === 2 ? <AddShoppingCartIcon /> : ''}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: 'rgba(0,0,0,0.87)' }}>
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap
                        style={{ margin: 'auto' }}>
                        Shoes
          </Typography>
          <Typography variant="h6" noWrap 
                    style={{  marginRight: '5px' }}>
                        <CartBadge />
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className='single_product_view'>
                    <div className='single_product_picture'>
                        <img src={products[id].image} alt=''></img>
                    </div>
                    <div className='single_product_details'>
                        <p className='product_price'>{products[id].price}</p>
                        <h2 className='product_name'>{products[id].name}</h2>
                        <h2 className='product_desc_title'>Description</h2>
                        <p className='product_desc'>{products[id].description}</p>
                        <Button className='add_to_cart' variant="outlined" color="secondary"
                        onClick={()=>{
                           setCart([...cart,id]);
                           console.log(cart,'after adding');
                        }} >
                            Add to Cart
                        </Button>
                    </div>
                </div>

            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;