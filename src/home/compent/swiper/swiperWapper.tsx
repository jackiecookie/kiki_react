import * as React from 'react';
import * as recipeItem from '../../../recipes/share/recipeItem';
import styled from 'styled-components';

const SwiperSection = styled.section`
  margin: 20px;
`;

const HeaderTitle = styled.header`
  padding-bottom: 20px;
`;

const SwilerDiv = styled.div`
  display: block;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 1px;
  white-space: nowrap;
  font-size: 0;
`;

import './style/index.less';

interface Props {
  headerTitle: string;
  size?: string;
  data: recipeItem.Props[];
}

function SwiperWapper(props: Props) {
  return (
    <SwiperSection>
      <HeaderTitle>{props.headerTitle}</HeaderTitle>
      <SwilerDiv>
        {props.data.map((item, index) => (
          <recipeItem.ReciptItem {...item} key={index} size={props.size} />
        ))}
      </SwilerDiv>
    </SwiperSection>
    // <section className="swiper_section">
    //   <header className="headTitle">{props.headerTitle}</header>
    //   <div className={kikiSwiperClass}>
    //     {props.data.map((item, index) => (
    //       <recipeItem.ReciptItem {...item} key={index} />
    //     ))}
    //   </div>
    // </section>
  );
}

export default SwiperWapper;
