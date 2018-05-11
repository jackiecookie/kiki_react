import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addCartAction, AddCartAction } from 'reducer/action/cart';
import { CartType } from 'type/cart';
import { StoreState } from 'reducer/type/index';
import './style.less';

interface Props {
  material: CartType;
  addCartClick: () => void;
}

class MaterialItem extends React.Component<Props> {
  render() {
    const { material, addCartClick } = this.props;
    return (
      <section className="materialSection">
        <div className="materialsubTitle">
          <h2 className="subTitle">用料</h2>
          <span onClick={addCartClick}>丢进菜篮</span>
        </div>
        <ul className="plain">
          {material.map((item, index) => (
            <li key={index}>
              <span className="ingredient">{item.name}</span>
              <span className="size">{item.size}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

interface MaterialProps {
  material: CartType;
}

const mapStateToProps = ({ carts }: StoreState) => {
  return { carts };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddCartAction>,
  ownProps: MaterialProps
) => {
  return {
    addCartClick: () => {
      dispatch(addCartAction(ownProps.material));
    }
  };
};

const Material = connect(mapStateToProps, mapDispatchToProps)(MaterialItem);

export default Material;
