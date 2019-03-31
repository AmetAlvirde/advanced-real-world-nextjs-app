import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import React from 'react';
import MySnackbarContentWrapper from './SnackbarContentWrapper';
import { notificationSnackbarStyles } from './styles';

function NotificationSnackbar() {
  const classes = notificationSnackbarStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Button className={classes.margin} onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="This is a success message!"
        />
      </Snackbar>
    </div>
  );
}

export default NotificationSnackbar;
