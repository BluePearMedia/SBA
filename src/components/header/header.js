import * as React from 'react';
import { Link } from 'gatsby';

import MobileNav from './mobileNav';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Hero from '../../images/Hero.svg';

import Helmets from '../helmet/helmets';

// markup
const Header = ({ home, title, subtitle }) => {
  return (
    <>
      <CssBaseline />
      <Helmets title={title} />
      <Box className='header container' pb={2} mb={4}>
        <Hidden only={['sm', 'xs']}>
          <AppBar color='transparent' position='static' elevation={0}>
            <Toolbar className='navigation right justify-end'>
              <Typography variant='h6'>
                <Link to='/'>Home</Link>
              </Typography>
              <Typography variant='h6'>
                <Link to='/services'>Services</Link>
              </Typography>
              <Typography variant='h6'>
                <Link to='/testimonials'>Testimonials</Link>
              </Typography>
              <Typography variant='h6'>
                <Link to='/contact'>Contact Us</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Hidden only={['xl', 'lg', 'md']}>
          <MobileNav className='navButton' />
        </Hidden>
        <Box display='flex' flexDirection='row' className=''>
          {home === true ? (
            <>
              <Box
                display='flex'
                flexDirection='column'
                className='width-30'
                justifyContent='center '
              >
                <Typography variant='h3' component='h1'>
                  Small Business Accountancy
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  Welcome to Small Business Accountancy - Accountants providing
                  complete cost effective Accountancy Solutions for small
                  businesses in Brighouse, Huddersfield, Halifax and surrounding
                  areas.
                </Typography>

                <Typography variant='subtitle1'>
                  Call now for a free consultation
                </Typography>
                <Typography variant='body1'>
                  <strong>01484 718048</strong>
                </Typography>
              </Box>

              <Box
                display='flex'
                justifyContent='flex-end'
                alignItems='center'
                className='width-70'
              >
                <Hidden only={['xs', 'sm']}>
                  <img
                    src={Hero}
                    className='width-70 hero'
                    alt='Money Saving Graphic'
                  />
                </Hidden>
              </Box>
            </>
          ) : (
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center '
              textAlign='center'
            >
              <Typography variant='h3'>{title}</Typography>
              <Typography variant='subtitle1'>{subtitle}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
