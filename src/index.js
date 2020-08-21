import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import authReducer from './store/reducers/auth';
import productReducer from './store/reducers/products';

import userproductReducer from './store/reducers/userReducers/products';
import userAuth from './store/reducers/userReducers/userAuth';
import cartReducer from './store/reducers/userReducers/cart';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  
  userProduct: userproductReducer,
  userAuth: userAuth,
  cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
