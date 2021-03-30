import * as React from 'react';
import { useState } from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Snack from '../components/snackbar/snack';
import Template from '../components/template/template';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [responce, setResponceData] = useState({});
  function sendEmail(e) {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch(
      'https://aaa8ayd33e.execute-api.eu-west-2.amazonaws.com/default/send_mail',
      requestOptions
    )
      .then((res) => setResponceData(res))
      .then((res) => setOpen(true));
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <main>
        <Snack open={open} onClose={handleClose} responce={responce} />
        <Template
          title='Contact'
          subtitle='From Trades People to Business and Healthcare Professionals, Shop owners to Haulage Contractors and everything inbetween, our clients run their Businesses safe in the knowledge that their Accountant is taking care of all of their Accountancy and Tax affairs. Please contact us for an informal, no obligation chat to see how we can help you. '
        >
          <Box
            className='justify-between container'
            display='flex'
            flexDirection='row'
            mb={4}
            flexWrap='wrap'
          >
            <Box
              className='width-50 '
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
            >
              <Typography variant='h4' component='h2'>
                Contact Details
              </Typography>
              <Typography variant='body1' component='p'>
                For enquiries or to request an appointment please contact us at:
              </Typography>
              <Box>
                {[
                  '18 Stoney Hill',
                  'Rastrick',
                  'Brighouse',
                  'West Yorkshire',
                  'HD6 3BP',
                ].map((text, index) => (
                  <Typography variant='body1' component='p' key={index}>
                    {text}
                  </Typography>
                ))}
              </Box>
              <Box>
                <Typography variant='body1' component='p'>
                  <strong>Tel:</strong> 01484 718048
                </Typography>
                <Typography variant='body1' component='p'>
                  <strong>Mobile:</strong>: 07732 540842
                </Typography>
                <Typography variant='body1' component='p'>
                  <strong>E-mail:</strong> info@small-business-accountancy.co.uk
                </Typography>
              </Box>
            </Box>
            <Box className='width-50 ' display='flex' flexDirection='column'>
              <Typography variant='body1' paragraph component='p'>
                Alternativly, leave your contact details below and we will get
                back to you as soon as possible.
              </Typography>
              <form
                onSubmit={(e) => sendEmail(e)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <TextField
                  name='name'
                  type='name'
                  label='Name'
                  variant='outlined'
                />
                <br />
                <TextField
                  name='email'
                  type='email'
                  label='Email'
                  variant='outlined'
                />
                <br />

                <TextField
                  name='message'
                  type='name'
                  multiline
                  rows={4}
                  label='Message'
                  variant='outlined'
                />
                <br />
                <Button
                  type='submit'
                  variant='outlined'
                  name='submit'
                  aria-label='Submit Form'
                >
                  Send
                </Button>
              </form>
            </Box>
          </Box>
        </Template>
      </main>
    </>
  );
};

export default Contact;
