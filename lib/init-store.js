import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reduxMulti from 'redux-multi';
import auth from '../components/LoginBox/reducer';
import counter from '../components/Counter/reducer';

const appReducers = combineReducers({
  auth,
  counter
});

const storeWithMiddleware = initialState => {
  return createStore(
    appReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, reduxMulti))
  );
};

export default storeWithMiddleware;
