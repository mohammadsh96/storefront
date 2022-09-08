import {createStore, combineReducers ,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';
import reducer from './API.js'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({categories, products, cart ,reducer });

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();