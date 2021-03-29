import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FreeAgent from '../../images/freeagent.png';
import ICPA from '../../images/icpa.png';
import TaxDigital from '../../images/taxdigital.png';

// markup
const Footer = () => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        className='justify-between container footer'
        textAlign='center'
        pt={2}
      >
        <Box className='width-30'>
          <Typography variant='h6' paragraph>
            Contact Us
          </Typography>
          {[
            '18 Stoney Hill',
            'Rastrick',
            'Brighouse',
            'West Yorkshire',
            'HD6 3BP',
          ].map((text, index) => (
            <Typography variant='body1' paragraph key={index}>
              {text}
            </Typography>
          ))}

          <Typography variant='body1' paragraph>
            <strong>Tel:</strong> 01484 718048
          </Typography>
          <Typography variant='body1' paragraph>
            <strong>Mobile:</strong>: 07732 540842
          </Typography>
          <Typography variant='body1' paragraph>
            <strong>E-mail:</strong> info@small-business-accountancy.co.uk
          </Typography>
        </Box>
        <Box className='width-30'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.0811878933273!2d-1.7897304841482315!3d53.6989992800545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bddbe864ffafd%3A0x9f04985d48d9da48!2s18%20Stoney%20Hill%2C%20Rastrick%2C%20Brighouse%20HD6%203BP!5e0!3m2!1sen!2suk!4v1616195965725!5m2!1sen!2suk'
            width='100%'
            height='400'
            allowfullscreen=''
            style={{ border: '0' }}
            title='Where to find us'
            loading='lazy'
          ></iframe>
        </Box>

        <Box className='width-30'>
          <Typography variant='h6' paragraph>
            Useful Links
          </Typography>
          <Typography variant='body1' paragraph>
            Facebook
          </Typography>
          <Typography variant='body1' paragraph>
            HM Revenue and Customs
          </Typography>
          <Typography variant='body1' paragraph>
            Companies House
          </Typography>
          <Typography variant='body1' paragraph>
            Hadfield Travel
          </Typography>
          <Typography variant='body1' paragraph>
            British Chambers of Commerce
          </Typography>
        </Box>
        <Box
          display='flex'
          className='justify-between align-item-center'
          flexWrap='wrap'
          style={{ width: '100%' }}
          pt={2}
        >
          <Box className='width-30'>
            <img
              src={FreeAgent}
              alt='Free Agent Expert'
              loading='lazy'
              style={{ width: '15rem', aspectRatio: 4.96 / 1 }}
            />
          </Box>
          <Box className='width-30'>
            <img
              src={ICPA}
              alt='ICPA'
              loading='lazy'
              style={{ width: '10rem' }}
            />
          </Box>
          <Box className='width-30'>
            <img
              src={TaxDigital}
              alt='Making Tax Digital'
              loading='lazy'
              style={{ width: '10rem' }}
            />
          </Box>
        </Box>
        <Box display='flex' style={{ width: '100%' }} justifyContent='center'>
          <Typography variant='body1' paragraph>
            Website by BluePearMedia
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
