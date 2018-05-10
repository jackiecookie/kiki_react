//@flow

import * as React from 'react';
import SwiperWapper from './swiperWapper';
import { Props as recipeItemType } from '../../../recipes/share/recipeItem';

interface Props {
  url: string;
  title: string;
}
interface State {
  recipesItem: [recipeItemType];
}

export default class extends React.Component<Props, State> {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ recipesItem: data.list }));
  }
  render() {
    let swiperProp = {
      data: this.state.recipesItem,
      headerTitle: this.props.title
    };
    return <SwiperWapper {...swiperProp} />;
  }
}
