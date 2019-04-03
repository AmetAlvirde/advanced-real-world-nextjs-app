import { makeStyles } from '@material-ui/styles';
import theme from '../../lib/theme';

const snackbarContentWrapperStyles = makeStyles(() => ({
  success: {
    backgroundColor: theme.success
  },
  error: {
    backgroundColor: theme.error
  },
  info: {
    backgroundColor: theme.info
  },
  warning: {
    backgroundColor: theme.warning
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
