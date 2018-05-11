import { injectGlobal } from 'styled-components';
export default function injectGlobalCss() {
  injectGlobal`
  *,
  *:before,
  *:after {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  body {
    background-color: #f5f5f9;
    font-size: 14px;
  }
  
  *[contenteditable] {
    -webkit-user-select: auto !important;
  }
  
  *:focus {
    outline: none;
  }
  
  a {
    background: transparent;
    text-decoration: none;
    outline: none;
  }
  
  [type='search'] {
    appearance: textfield;
    outline-offset: -2px;
  }
  
  .plain {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .mb0 {
    margin-bottom: 0 !important;
  }
  
  `;
}
