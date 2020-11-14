import React from 'react';
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className='cart_paper'>
        <div className='cart_paper_content'>
          <img className='cart_paper_image' src={props.image} alt='' />
          <div className='cart_paper_text'>
            <div>{props.name}</div>
            <div>{props.price}</div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
