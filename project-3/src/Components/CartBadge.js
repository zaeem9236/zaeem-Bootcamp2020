import React,{ useContext } from 'react';
import { CartManagement } from '../App';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CartBadge() {
    var [cart] = useContext(CartManagement);

  return (
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={cart.length}  style={{paddingRight: '10px', color: 'rgb(255,250,0)'}} >
        <ShoppingCartIcon  style={{color: 'white'}} />
      </StyledBadge>
    </IconButton>
  );
}
