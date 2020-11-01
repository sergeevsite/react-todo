import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import rootReducer from './reducers/root.reducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    reduxThunk,
    reduxLogger
  )
);

export const store = createStore(rootReducer, enhancer)