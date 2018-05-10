import * as actionConst from './constants/addCart';
import { CartAction } from './action/cart';
import { CartStoreState } from 'reducer/type';

const cart = (state: CartStoreState, action: CartAction) => {
  switch (action.type) {
    case actionConst.CART_ADD:
      return [...state, action.payload];
    case actionConst.CART_REMOVE:
      return (id => {
        for (var i = 0; i < state.length; i++) {
          if (state[i].id === id) {
            return state.splice(i, 1);
          }
        }
        return state;
      })(action.payload);
    default:
      return state;
  }
};

export default cart;
