import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';
// import cart1 from './cart1.js';

// import {}

const rootReducer = combineReducers({categories, products, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();