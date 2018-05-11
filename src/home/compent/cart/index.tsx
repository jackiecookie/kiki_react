import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'reducer/type';
import { CartType } from 'type/cart';

interface Props {
  carts: CartType;
}

class CartItem extends React.Component<Props> {
  render() {
    const { carts } = this.props;
    return <i className="icon icon-lanzi" data-cart={carts.length} />;
  }
}

const mapStateToProps = ({ carts }: StoreState) => {
  return { carts };
};

const Cart = connect(mapStateToProps)(CartItem);

export default Cart;
