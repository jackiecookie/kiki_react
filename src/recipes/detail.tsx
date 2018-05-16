import * as React from 'react';
import axios from 'axios';
import './style/detail.less';
import Material from './compent/material';
import { CartType } from 'type/cart';
import Header from './compent/header';
import styled from 'styled-components';
import StepSection, { StepDetailType } from './compent/StepSection';

interface DetailDataType {
  headImg: string;
  name: string;
  author: {
    avatar: string;
    name: string;
  };
  material: CartType;
  step: StepDetailType[];
}

const Wapper = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 1);
`;

const Img = styled.img`
  width: 100%;
  height: 335px;
`;

const RecipeWapper = styled.div`
  margin: 20px;
`;

const HeadTitle = styled.header`
  margin: 25px 0px;
  text-align: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #f0f0f0;
  > h1 {
    font-size: 30px;
    display: inline;
  }
`;

interface State {
  detailData: DetailDataType;
}
export default class Detail extends React.Component<object, State> {
  HeadIcon: HTMLElement[] = [];
  constructor(props: object) {
    super(props);
  }
  async componentDidMount() {
    const response = await axios.get(
      'http://mock.eolinker.com/Kjvr2yJ225aa74168ab8ea8482ec091c1ee6e0bc364e29e?uri=recipes/detail'
    );
    this.setState({ detailData: response.data });
  }
  render() {
    const detailData = this.state && this.state.detailData;
    return (
      <Wapper>
        <Header />
        <div>
          <Img
            src={detailData && detailData.headImg}
            alt={detailData && detailData.name}
          />
        </div>
        <RecipeWapper className="mb0">
          <HeadTitle>
            <h1 className="plain">{detailData && detailData.name}</h1>
          </HeadTitle>
          <Material material={(detailData && detailData.material) || []} />
          <StepSection steps={detailData && detailData.step} />
        </RecipeWapper>
      </Wapper>
    );
  }
}
