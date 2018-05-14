import { injectGlobal } from 'styled-components';
export default function injectGlobalIcon() {
  const size = (sizePara: number) => (
    `line-height: ${sizePara}px;
   font-size: ${sizePara}px;`
  );
  return injectGlobal`
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_621929_pspdyh8u5w9oogvi.eot?t=1523521062093'); /* IE9*/
    src: url('//at.alicdn.com/t/font_621929_pspdyh8u5w9oogvi.eot?t=1523521062093#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAiEAAsAAAAAC
        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')
        format('woff'),
      url('//at.alicdn.com/t/font_621929_pspdyh8u5w9oogvi.ttf?t=1523521062093')
        format('truetype'),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/font_621929_pspdyh8u5w9oogvi.svg?t=1523521062093#iconfont')
        format('svg'); /* iOS 4.1- */
  }
  .icon {
    font-family: 'iconfont' !important;
    ${size(20)}
    color: @color-primary;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5rpx;
  }
  .iconfont {
    font-family: 'iconfont' !important;
    ${size(16)}
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon.xxxlarge {
    ${size(45)}
  }
  .icon.xxlarge {
    ${size(40)}
  }
  .icon.xlarge {
    ${size(35)}
  }
  .icon.large {
    ${size(30)}
  }
  .icon.normal {
    ${size(25)}
  }
  .icon.small {
    ${size(20)}
  }
  .icon.xsmall {
    ${size(15)}
  }
  .icon-jiahao:before {
    content: '\e61f';
  }
  .icon-lanzi:before {
    content: '\e6a2';
  }
  .icon-Search:before {
    content: '\e60c';
  }
  .icon-pengyouquan:before {
    content: '\e628';
  }
  .icon-weixin:before {
    content: '\e63f';
  }
  .icon-houtui:before {
    content: '\e749';
  }
  `;
}
