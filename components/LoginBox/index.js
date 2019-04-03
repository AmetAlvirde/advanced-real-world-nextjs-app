import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import useForm from '../../hooks/useForm';
import { clearSnackbar, login, setIsLoading } from './actions';
import { LoginTitle, LoginForm, cardStyles } from './styles';
import SnackbarNotification from '../SnackbarNotification';

const Login = ({ error, isLoading, router, dispatch, classes, variant }) => {
  const initialFormFields = { username: '', password: '' };
  const { values, handleChange, handleSubmit } = useForm(() => {
    const { query } = router;
    const next = query.next || '/';
    dispatch(clearSnackbar());
    dispatch(
      login({ username: values.username, password: values.password }),
      next
    );
    dispatch(setIsLoading({ isLoading: true }));
  }, initialFormFields);
  return (
    <>
      {error && (
        <SnackbarNotification
          autoHideDuration="2000"
          vertical="bottom"
          horizontal="left"
          message={error}
          variant={variant}
        />
      )}

      <Card raised className={classes.card}>
        {isLoading && <LinearProgress />}
        <CardContent>
          <LoginTitle>LOGIN TO YOUR AWESOME APP</LoginTitle>
          <LoginForm>
            <form onSubmit={handleSubmit}>
              <TextField
                style={{ color: 'red' }}
                id="username"
                label="username"
                name="username"
                type="text"
                margin="normal"
                onChange={handleChange}
                value={values.username}
                variant="outlined"
              />
              <TextField
                id="password"
                label="password"
                name="password"
                type="password"
                margin="normal"
                value={values.password}
                onChange={handleChange}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Login"
              >
                Login
              </Button>
            </form>
          </LoginForm>
        </CardContent>
      </Card>
    </>
  );
};

Login.propTypes = {
  router: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  error: PropTypes.string,
  variant: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};
Login.defaultProps = {
  isLoading: false,
  error: '',
  variant: ''
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    variant: state.auth.variant
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(cardStyles)(Login))
);
