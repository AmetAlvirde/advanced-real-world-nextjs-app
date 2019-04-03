import axios from 'axios';
import Router from 'next/router';
import BASE_URL from './constants';

axios.defaults.timeout = 5000;

const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: 'SET_ERROR', message: '' });
  };
};

const login = (payload, next = '/') => {
  return dispatch =>
    axios
      .post(`${BASE_URL}/api/Login`, payload)
      .then(res => {
        dispatch([
          { type: 'SET_USER', user: res.data },
          { type: 'SET_IS_LOADING', isLoading: false }
        ]);
        Router.push(next);
      })
      .catch(response => {
        if (response.response && response.response.status === 401) {
          dispatch([
            { type: 'SET_IS_LOADING', isLoading: false },
            {
              type: 'SET_ERROR',
              message: 'Usuario o ocntraseña incorrectos',
              variant: 'error'
            }
          ]);
        } else {
          dispatch([
            {
              type: 'SET_ERROR',
              variant: 'error',
              message:
                'Ocurrió un error inesperado, por favor intenta nuevamente'
            },
            { type: 'SET_IS_LOADING', isLoading: false }
          ]);
        }
      });
};

const setIsLoading = payload => {
  return dispatch =>
    dispatch({ type: 'SET_IS_LOADING', isLoading: payload.isLoading });
};

const logout = () => {
  return dispatch =>
    axios
      .get(`${BASE_URL}/api/logout`)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        Router.push('/');
      })
      .catch(err => err);
};

const whoAmI = cookie => {
  return dispatch => {
    return axios
      .get(`${BASE_URL}/api/whoami`, {
        headers: {
          Accept: 'application/json',
          Cookie: cookie
        },
        withCredentials: true
      })
      .then(response => {
        let user = null;
        if (response.data) {
          user = response.data;
        }
        dispatch({
          type: 'SET_USER',
          user
        });
        return user;
      })
      .catch(() => {
        return null;
      });
  };
};

export { clearSnackbar, login, logout, setIsLoading, whoAmI };
