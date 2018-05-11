import * as React from 'react';
import axios from 'axios';
import './style/detail.less';
import Material from './compent/material';
import { CartType } from 'type/cart';
import Header from './compent/header';
import styled from 'styled-components';

interface DetailDataType {
  headImg: string;
  name: string;
  author: {
    avatar: string;
    name: string;
  };
  material: CartType;
  step: any[];
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
    // this.HeadIcon = [];
    this.setHeadIconRef = this.setHeadIconRef.bind(this);
  }
  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    const response = await axios.get(
      'http://mock.eolinker.com/Kjvr2yJ225aa74168ab8ea8482ec091c1ee6e0bc364e29e?uri=recipes/detail'
    );
    this.setState({ detailData: response.data });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const lastScrollY = window.scrollY;
    if (lastScrollY > 0) {
      let alpha = lastScrollY / 330;
      alpha = alpha > 1 ? 1 : alpha;
      const recipeHeader = this.refs.recipeHeader as HTMLElement;
      if (recipeHeader && recipeHeader.style) {
        recipeHeader.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
      }
      this.HeadIcon.map(icon => {
        if (alpha < 0.2) {
          icon.style.color = ``;
        } else {
          icon.style.color = `rgba(0, 0, 0, ${alpha})`;
        }
        return true;
      });
    }
  }
  setHeadIconRef(elm: HTMLElement) {
    this.HeadIcon.push(elm);
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
          <section className="step">
            <ul className="plain">
              {detailData &&
                detailData.step.map((item, index) => (
                  <li key={index}>
                    <aside className="subTitle">步骤 {index + 1}</aside>
                    <article>
                      <div>
                        <img src={item.image} alt={item.image} />
                      </div>
                      <p>{item.detail}</p>
                    </article>
                  </li>
                ))}
            </ul>
          </section>
        </RecipeWapper>
      </Wapper>
    );
  }
}
