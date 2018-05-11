import * as React from 'react';
import axios from 'axios';
import './style/detail.less';
import Material from './compent/material';
import { CartType } from 'type/cart';

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
        // color(`rgba(255, 255, 255, ${alpha})`).cssa();
        recipeHeader.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
      }
      this.HeadIcon.map(icon => {
        if (alpha < 0.2) {
          icon.style.color = ``;
        } else {
          // color(`rgba(0, 0, 0, ${alpha})`).cssa()
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
    return (
      <div className="recipe-detail">
        <header className={'recipe-header'} ref="recipeHeader">
          <i className="icon icon-houtui large" ref={this.setHeadIconRef} />
          <i className="icon icon-weixin large" ref={this.setHeadIconRef} />
          <i
            className="icon icon-pengyouquan large"
            ref={this.setHeadIconRef}
          />
          <i className="icon icon-lanzi large" ref={this.setHeadIconRef} />
        </header>
        <div className="imgContainer">
          <img
            src={this.state.detailData.headImg}
            alt={this.state.detailData.name}
          />
        </div>
        <div className="recipeWapper mb0">
          <header className="headTitle">
            <h1 className="plain">{this.state.detailData.name}</h1>
          </header>
          <Material material={this.state.detailData.material} />
          <section className="step">
            <ul className="plain">
              {this.state.detailData.step.map((item, index) => (
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
        </div>
      </div>
    );
  }
}
