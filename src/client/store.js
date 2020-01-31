import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './redux/reducers';

let loggerMiddleware = null;

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  loggerMiddleware = createLogger({ collapsed: true });
}


const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  ),
);

window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState(),
});

export default store;
