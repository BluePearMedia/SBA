import React, { useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

export default function MobileNav() {
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    button: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      borderRadius: '10rem',
      padding: '1.5rem',
      zIndex: 999,
    },
  });
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to='/'>
          <ListItem button>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link to='/services'>
          <ListItem button>
            <ListItemText primary='Services' />
          </ListItem>
        </Link>
        <Link to='/testimonials'>
          <ListItem button>
            <ListItemText primary='Testimonials' />
          </ListItem>
        </Link>
        <Link to='/Contact'>
          <ListItem button>
            <ListItemText primary='Contact Us' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={classes.button}
            onClick={toggleDrawer(anchor, true)}
            variant='contained'
            color='primary'
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
