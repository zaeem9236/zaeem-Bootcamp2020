import React, {useContext } from 'react';
import { CartManagement } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper(props) {

  var [cart, setCart] = useContext(CartManagement);


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className='cart_paper'>
        <div className='cart_paper_content'>
          <img className='cart_paper_image' src={props.image} alt='' />
          <div className='cart_paper_text'>
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div><button onClick={()=>{
              cart.splice([props.uid],1);
              let dummy_array =[];
              for(let i=0; i<cart.length; i++){
                dummy_array.push(parseInt(cart[i])); 
              }
              setCart(dummy_array);
            }}>del</button></div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
