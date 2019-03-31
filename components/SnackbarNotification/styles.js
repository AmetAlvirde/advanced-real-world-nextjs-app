import { makeStyles } from '@material-ui/styles';

const snackbarContentWrapperStyles = makeStyles(() => ({
  success: {
    backgroundColor: 'green'
  },
  error: {
    backgroundColor: 'blue'
  },
  info: {
    backgroundColor: 'blue'
  },
  warning: {
    backgroundColor: 'yellow'
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: '5px'
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const notificationSnackbarStyles = makeStyles(() => ({
  margin: {
    margin: '5px'
  }
}));

export { snackbarContentWrapperStyles };
export { notificationSnackbarStyles };
