import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import Template from '../components/template/template';

// markup

const feedback = [
  {
    name: 'Timothy Fee',
    feedback:
      'I have found James to be very professional and knowledgeable with a pleasant manner. He always reacts very promptly to any questions or issues I put to him. I would most certainly recommend him to anyone looking for a first class professional accountancy service.',
  },

  {
    name: 'Carl Marsden',
    feedback:
      " Being relatively new to the world of running a business I needed an Accountant who would provide an affordable service that was beyond filling out paperwork. I'm happy to say that I knew within a couple of minutes of speaking with James that he was the man for the job. He's polite, friendly, efficient and helpful beyond the call of duty and I will be recommending him to any who ask.",
  },

  {
    name: 'Jamie Thompson',
    feedback:
      " Being relatively new to the world of running a business I needed an Accountant who would provide an affordable service that was beyond filling out paperwork. I'm happy to say that I knew within a couple of minutes of speaking with James that he was the man for the job. He's polite, friendly, efficient and helpful beyond the call of duty and I will be recommending him to any who ask.",
  },

  {
    name: 'Richard De Vere',
    feedback:
      'James has helped me throughout the year with advice on tax issues and has submitted my returns. He is competent and knowledgable on all things financial. ',
  },
];

const Testimonials = () => {
  return (
    <>
      <main>
        <Template
          title='Testimonials'
          subtitle='Although we are Brighouse Accountants, we look after a diverse
                  range of clients in Huddersfield, Halifax, Bradford,
                  Cleckheaton, Mirfield and surrounding areas. We also have a
                  growing nationwide client base thanks to our versatile cloud
                  accounting bookkeeping solutions that enable us to work
                  closely with clients wherever they are.'
        >
          <Box mb={4}>
            {feedback.map((f, index) =>
              index % 2 === 0 ? (
                <Box display='flex' className='container '>
                  <Box className='speech-bubble speech-bubble-left'>
                    <Typography variant='h6' paragraph component='p'>
                      {f.name}
                    </Typography>
                    <Typography variant='body1' paragraph component='p'>
                      {f.feedback}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box display='flex' className='container flex-right'>
                  <Box className='speech-bubble speech-bubble-right'>
                    <Typography variant='h6' paragraph component='p'>
                      {f.name}
                    </Typography>
                    <Typography variant='body1' paragraph component='p'>
                      {f.feedback}
                    </Typography>
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Template>
      </main>
    </>
  );
};

export default Testimonials;
