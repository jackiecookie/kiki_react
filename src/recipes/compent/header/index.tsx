import * as React from 'react';
import styled from 'styled-components';

const HeaderWapper = styled.header`
  position: fixed;
  z-index: 1;
`;

export default class Header extends React.Component {
  HeadIcon: HTMLElement[] = [];
  constructor(props: any) {
    super(props);
    this.setHeadIconRef = this.setHeadIconRef.bind(this);
  }
  Icon = (props: { className: string }) => (
    <i className={`icon large ${props.className}`} ref={this.setHeadIconRef} />
  );
  setHeadIconRef(elm: HTMLElement) {
    this.HeadIcon.push(elm);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
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
  render() {
    return (
      <HeaderWapper ref="recipeHeader">
        <this.Icon className="icon-houtui" />
        <this.Icon className="icon-weixin" />
        <this.Icon className="icon-pengyouquan" />
        <this.Icon className="icon-lanzi" />
      </HeaderWapper>
    );
  }
}
