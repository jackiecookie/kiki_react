import { CartType } from 'type/cart';

export type CartStoreState = CartType;

export interface StoreState {
  carts: CartType;
}
