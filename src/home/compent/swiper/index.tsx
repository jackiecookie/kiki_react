import * as React from 'react';
import { Props as recipeItemType } from '../../../recipes/share/recipeItem';
import SwiperWapper from './swiperWapper';

interface Props {
  url: string;
  title: string;
}
interface State {
  recipesItem: recipeItemType[];
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipesItem: []
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ recipesItem: data.list }));
  }
  render() {
    const swiperProp = {
      data: this.state.recipesItem,
      headerTitle: this.props.title
    };
    return <SwiperWapper {...swiperProp} />;
  }
}
