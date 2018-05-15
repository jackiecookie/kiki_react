import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconEnum } from 'component/icon';

const HeaderWapper = styled.header`
  position: fixed;
  z-index: 1;
`;

export default class Header extends React.Component<
  any,
  { iconColor: string }
> {
  HeadIcon: HTMLElement[] = [];
  recipeHeader: HTMLElement;
  constructor(props: any) {
    super(props);
    this.setHeadIconRef = this.setHeadIconRef.bind(this);
    this.state = {
      iconColor: 'white'
    };
  }
  Icon = (props: { icon: IconEnum }) => (
    <Icon icon={props.icon} color={this.state.iconColor} />
    // <i className={`icon large ${props.className}`}/>
  );
  setHeadIconRef(elm: any) {
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
      const recipeHeader = this.recipeHeader as HTMLElement;
      if (recipeHeader && recipeHeader.style) {
        recipeHeader.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
      }
      const iconColor = alpha < 0.2 ? `white` : `rgba(0, 0, 0, ${alpha})`;
      this.setState({
        iconColor
      });
      // this.HeadIcon.map(icon => {
      //   if (alpha < 0.2) {
      //     icon.style.color = ``;
      //   } else {
      //     icon.style.color = `rgba(0, 0, 0, ${alpha})`;
      //   }
      //   return true;
      // });
    }
  }
  render() {
    return (
      <HeaderWapper innerRef={comp => (this.recipeHeader = comp)}>
        <this.Icon icon={IconEnum.houtui} />
        <this.Icon icon={IconEnum.weixin} />
        <this.Icon icon={IconEnum.pengyouquan} />
        <this.Icon icon={IconEnum.lanzi} />
      </HeaderWapper>
    );
  }
}
