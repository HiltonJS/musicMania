import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataReducer from './dataReducer';

const store = createStore(
  dataReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
