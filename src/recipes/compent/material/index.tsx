import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addCartAction, AddCartAction } from 'reducer/action/cart';
import { CartType } from 'type/cart';
import { StoreState } from 'reducer/type/index';
import SubTitle from '../share/subTitle';
import styled, { css } from 'styled-components';

const SubTitleExten = SubTitle.extend`
  flex: 1;
`;

const MaterialSection = styled.section`
  font-size: 17px;
`;

const MaterialsubTitle = styled.div`
  display: flex;
`;

const FlotLeft = css`
  float: left;
`;

const Ingredient = styled.span`
  ${FlotLeft} width: 50%;
  padding-right: 37px;
`;

const Size = styled.span`
  ${FlotLeft} width: 40%;
`;

const Li = styled.li`
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  padding: 11px 0;
  :first-child {
    border-top: 1px solid #ececea;
  }
`;

interface Props {
  material: CartType;
  addCartClick: () => void;
}

class MaterialItem extends React.Component<Props> {
  render() {
    const { material, addCartClick } = this.props;
    return (
      <MaterialSection>
        <MaterialsubTitle>
          <SubTitleExten>用料</SubTitleExten>
          <span onClick={addCartClick}>丢进菜篮</span>
        </MaterialsubTitle>
        <ul className="plain">
          {material.map((item, index) => (
            <Li key={index}>
              <Ingredient>{item.name}</Ingredient>
              <Size>{item.size}</Size>
            </Li>
          ))}
        </ul>
      </MaterialSection>
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
