import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// Function which returns function.
const logger = store => {
  return next => {
    return action => {
      // Middleware
      console.log('[Middleware] Dispathing.', action);
      const result = next(action);
      console.log('[Middleware] next state.', store.getState());
      return result;
    };
  };
};

// For Redux DevTools in Chrome.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

// Provier is helper container to inject our stores in react components.
// </Provider> for hooking up provider container with app wrap it with createStore.
ReactDOM.render(
  <Provider store={store}>
    {' '}
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
