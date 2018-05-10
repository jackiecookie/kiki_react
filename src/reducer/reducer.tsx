import { combineReducers } from 'redux';
import cart from './cart';

const rootReducer = combineReducers({
  carts: cart
});

export default rootReducer;
