import * as React from 'react';
import { stypedFn } from 'styped';

const iconSizeFn = (sizePara: number) =>
  `line-height: ${sizePara}px;
 font-size: ${sizePara}px;`;

export enum iconSize {
  normal,
  large,
  xlarge,
  xxlarge,
  xxxlarge,
  xsmall,
  small
}
export enum IconEnum {
  houtui,
  weixin,
  pengyouquan,
  lanzi,
  jiahao,
  Search
}

const IconTag = stypedFn<{ size?: iconSize; color?: string }>()(
  style =>
    style.svg`
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: ${props => props.color || 'black'};
    ${props => {
      const _size = props.size || iconSize.normal;
      let sizeNumber = 0;
      switch (_size) {
        case iconSize.xsmall:
          sizeNumber = 20;
        case iconSize.xxxlarge:
          sizeNumber = 45;
        case iconSize.xxlarge:
          sizeNumber = 40;
        case iconSize.xlarge:
          sizeNumber = 35;
        case iconSize.large:
          sizeNumber = 30;
        case iconSize.normal:
          sizeNumber = 25;
        case iconSize.small:
          sizeNumber = 20;
        default:
          sizeNumber = 25;
      }
      return iconSizeFn(sizeNumber);
    }}
    `
);

interface Props {
  size?: iconSize;
  icon: IconEnum;
  color?: string;
}

export default class Icon extends React.Component<Props> {
  render() {
    const { icon, size, color } = this.props;
    const _icon = `#icon-${IconEnum[icon]}`;
    return (
      <IconTag {...{ size, color }}>
        <use xlinkHref={_icon} />
      </IconTag>
    );
  }
}
