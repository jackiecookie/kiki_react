import { connect } from 'react-redux';
import * as React from 'react';
import { CartType } from 'type/cart';
import { StoreState } from 'reducer/type';

interface Props {
  carts: CartType;
}

class CartItem extends React.Component<Props> {
  render() {
    var { carts } = this.props;
    return <i className="icon icon-lanzi" data-cart={carts.length} />;
  }
}

const mapStateToProps = ({ carts }: StoreState) => {
  return {
    carts: carts
  };
};

const Cart = connect(mapStateToProps)(CartItem);

export default Cart;
