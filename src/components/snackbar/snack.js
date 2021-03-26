import * as React from 'react';
import { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Snack = ({ open, handleClose, responce }) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={600}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={responce.status === 200 ? 'success' : 'error'}
        >
          {responce.status === 200
            ? 'Message Sent'
            : 'Error, please try again later'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Snack;
