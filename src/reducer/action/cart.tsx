import * as actionConst from '../constants/addCart';
import { CartType } from 'type/cart';

export interface AddCartAction {
  type: actionConst.CART_ADD;
  payload: CartType;
}

export interface RemoveCartAction {
  type: actionConst.CART_REMOVE;
  payload: string;
}

export type CartAction = AddCartAction | RemoveCartAction;

export function addCartAction(cart: CartType): AddCartAction {
  return {
    type: actionConst.CART_ADD,
    payload: cart
  };
}

export function removeCartAction(cartId: string): RemoveCartAction {
  return {
    type: actionConst.CART_REMOVE,
    payload: cartId
  };
}
