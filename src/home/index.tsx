import * as React from 'react';
import Swiper from './compent/swiper';
import * as Search from './compent/search';
import Cart from './compent/cart';

class Home extends React.Component {
  state = {};
  componentProp = {
    searchProps: {
      maxLength: 8,
      placeholder: '搜索食材,食谱',
      onSubmit: () => {}
    },
    swiperProps: {
      url:
        'http://mock.eolinker.com/Kjvr2yJ225aa74168ab8ea8482ec091c1ee6e0bc364e29e?uri=recipes',
      title: '推荐食谱'
    }
  };
  render() {
    return (
      <div>
        <div className="home-header">
          <i className="icon icon-jiahao" />
          <Search.SearchBar
            {...this.componentProp.searchProps}
            className="home-searchBar"
          />
          <Cart />
        </div>
        <div>
          <Swiper {...this.componentProp.swiperProps} />
        </div>
      </div>
    );
  }
}

export default Home;
