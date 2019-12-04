import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider }  from "react-redux"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./reducer";


const store = createStore(reducer);

// Provier is helper container to inject our stores in react components. 
// </Provider> for hooking up provider container with app wrap it with createStore. 
ReactDOM.render( <Provider store={store}> <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
