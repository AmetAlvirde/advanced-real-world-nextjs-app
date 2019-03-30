import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import auth from '../components/LoginBox/reducer';
import counter from '../components/Counter/reducer';

const appReducers = combineReducers({
  auth,
  counter
});

export default initialState =>
  createStore(
    appReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
