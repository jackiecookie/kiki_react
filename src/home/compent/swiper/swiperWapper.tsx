import * as classnames from 'classnames';
import * as React from 'react';
import * as recipeItem from '../../../recipes/share/recipeItem';
import './style/index.less';

interface Props {
  headerTitle: string;
  size?: string;
  data: recipeItem.Props[];
}

function SwiperWapper(props: Props) {
  const isBigSize = props.size && props.size === 'big';
  const kikiSwiperClass = classnames(
    'kiki_swiper',
    isBigSize ? 'big' : 'normal'
  );
  return (
    <section className="swiper_section">
      <header className="headTitle">{props.headerTitle}</header>
      <div className={kikiSwiperClass}>
        {props.data.map((item, index) => (
          <recipeItem.ReciptItem {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SwiperWapper;
