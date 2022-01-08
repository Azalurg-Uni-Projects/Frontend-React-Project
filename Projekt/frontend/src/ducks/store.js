import { combineReducers, createStore,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createMiddleware } from 'redux-api-middleware';

import { userReducer} from './users/reducers';
import { nftReducer } from './nfts/reducers';
import { collectionReducer } from './collections/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
    users: userReducer,
    nfts: nftReducer,
    collections: collectionReducer
  });

const store = createStore(combinedReducers, 
  composeEnhancers(applyMiddleware(thunk,createMiddleware(), logger)),
);

export default store;