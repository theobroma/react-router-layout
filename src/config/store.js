import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './rootReducer';

export const history = createHistory();

const middlewares = [thunkMiddleware, routerMiddleware(history)];

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
