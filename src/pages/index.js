import * as React from 'react';
// import { Link } from 'gatsby';

import Typography from '@material-ui/core/Typography';

// import Hidden from '@material-ui/core/Hidden';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';

import Startup from '../images/startup.svg';
import Writing from '../images/writing.svg';
import Calculator from '../images/calculator.svg';
import Calendar from '../images/calendar.svg';
import Cloud from '../images/cloud-computing.svg';
import Payment from '../images/payment.svg';

import Template from '../components/template/template';

// markup
const IndexPage = () => {
  return (
    <>
      <main>
        <Template home={true} title='Home Page'>
          <Box mb={4}>
            <Grid
              container
              className='text-align-center container services'
              gutterBottom
            >
              <Grid item lg={2} md={4} sm={4} xs={6}>
                <img src={Cloud} alt='cloud Accouting' />
                <Typography variant='h6'>Cloud Accounting</Typography>
              </Grid>
              <Grid item lg={2} md={4} sm={4} xs={6} py={1}>
                <img src={Calendar} alt='calendar' />
                <Typography variant='h6'>Year End Accounts</Typography>
              </Grid>
              <Grid item lg={2} md={4} sm={4} xs={6}>
                <img src={Writing} alt='Pen Writing' />
                <Typography variant='h6'>Self Assessment</Typography>
              </Grid>
              <Grid item lg={2} md={4} sm={4} xs={6}>
                <img src={Calculator} alt='Calculator' />
                <Typography variant='h6'>Corporation Tax</Typography>
              </Grid>
              <Grid item lg={2} md={4} sm={4} xs={6}>
                <img src={Payment} alt='VAT Payment' />
                <Typography variant='h6'>VAT</Typography>
              </Grid>
              <Grid item lg={2} md={4} sm={4} xs={6}>
                <img src={Startup} alt='Rocket' />
                <Typography variant='h6'>Start Ups</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            className='justify-between container'
            display='flex'
            flexDirection='row'
            mb={4}
            flexWrap='wrap'
          >
            <Box className='width-50 ' display='flex' flexDirection='column'>
              <Typography variant='h4' gutterBottom>
                About Us
              </Typography>
              <Typography variant='body1' paragraph>
                Our firm expertly attends to all your taxation and business
                needs. Thanks to our expertise, dedication and years of
                experience in consulting and assessment, we can offer you
                support that you can rely on.
              </Typography>

              <Typography variant='body1' paragraph>
                We understand the importance of building close working
                relationships with our clients so whether you are a Sole Trader,
                Partnership or a small Limited Company, we can offer Year round
                help & advice and provide tailor made Accountancy packages,
                incorporating Year End Accounts Preparation, Self Assessment,
                VAT and Taxation services to suit your needs.
              </Typography>
              <Typography variant='body1' paragraph>
                Although we are Brighouse Accountants, we look after a diverse
                range of clients in Huddersfield, Halifax, Bradford,
                Cleckheaton, Mirfield and surrounding areas. We also have a
                growing nationwide client base thanks to our versatile cloud
                accounting bookkeeping solutions that enable us to work closely
                with clients wherever they are.
              </Typography>
              <Typography variant='body1' paragraph>
                From Trades People to Business and Healthcare Professionals,
                Shop owners to Haulage Contractors and everything inbetween, our
                clients run their Businesses safe in the knowledge that their
                Accountant is taking care of all of their Accountancy and Tax
                affairs.
              </Typography>
            </Box>
            <Box className='width-50 ' display='flex' flexDirection='column'>
              <Typography variant='h4' gutterBottom>
                Our Guarantees
              </Typography>
              <Typography variant='body1' paragraph>
                Our clients benefit from a high level of customer service and
                can conduct their business safe in the knowledge that their Tax
                affairs are in good hands. Here at Small Business Accountancy we
                are proud to offer all of our clients the following guarantees:
              </Typography>
              <Box display='flex' flexDirection='column'>
                <ul>
                  <li>
                    <Typography variant='body1' paragraph>
                      Your fees will cover all services with no hidden extras
                      for letters and telephone calls etc.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1' paragraph>
                      All clients benefit from a one to one service with a
                      designated Accountant who will manage their account and
                      will always be available to offer help & advice and
                      resolve any problems that may occur throughout the year.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1' paragraph>
                      We will communicate directly with H M Revenue & Customs
                      and Companies House on your behalf.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1' paragraph>
                      We will file all accounts and returns on your behalf in a
                      timely manner, avoiding any penalties and helping you to
                      plan ahead for any Tax payable.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1' paragraph>
                      All client information is treated as strictly
                      confidential.
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>

          <Box mb={4}>
            <Box display='flex' className='container '>
              <Box className='speech-bubble speech-bubble-left'>
                <Typography variant='h6' paragraph>
                  Timothy Fee
                </Typography>
                <Typography variant='body1' paragraph>
                  I have found James to be very professional and knowledgeable
                  with a pleasant manner. He always reacts very promptly to any
                  questions or issues I put to him. I would most certainly
                  recommend him to anyone looking for a first class professional
                  accountancy service.
                </Typography>
              </Box>
            </Box>
            <Box display='flex' className='container flex-right'>
              <Box className='speech-bubble speech-bubble-right'>
                <Typography variant='h6' paragraph>
                  Carl Marsden
                </Typography>
                <Typography variant='body1' paragraph>
                  Being relatively new to the world of running a business I
                  needed an Accountant who would provide an affordable service
                  that was beyond filling out paperwork. I'm happy to say that I
                  knew within a couple of minutes of speaking with James that he
                  was the man for the job. He's polite, friendly, efficient and
                  helpful beyond the call of duty and I will be recommending him
                  to any who ask.
                </Typography>
              </Box>
            </Box>
            <Box display='flex' className='container '>
              <Box className='speech-bubble speech-bubble-left'>
                <Typography variant='h6' paragraph>
                  Jamie Thompson
                </Typography>
                <Typography variant='body1' paragraph>
                  James first came to my home a couple of years ago, he was very
                  professional and polite. He spent time talking through my
                  paperwork and how he could help with my accounts. This is my
                  2nd year with James and I am very happy with the high level of
                  service I have received from him. I would definitely recommend
                  him to anyone who is looking for an accountant.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Template>
      </main>
    </>
  );
};

export default IndexPage;
