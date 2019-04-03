import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import PropTypes from 'prop-types';
import MySnackbarContentWrapper from './SnackbarContentWrapper';
import { notificationSnackbarStyles } from './styles';

function NotificationSnackbar({
  autoHideDuration,
  horizontal,
  message,
  variant,
  vertical
}) {
  const [open, setOpen] = React.useState(true);
  notificationSnackbarStyles();

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical,
        horizontal
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
}

NotificationSnackbar.propTypes = {
  autoHideDuration: PropTypes.number,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  vertical: PropTypes.string,
  horizontal: PropTypes.string
};

NotificationSnackbar.defaultProps = {
  autoHideDuration: 2000,
  vertical: 'bottom',
  horizontal: 'left'
};

export default NotificationSnackbar;
