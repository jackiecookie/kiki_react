import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { stypedFn } from 'styped';

export interface Props {
  id: string;
  author: string;
  name: string;
  img: string;
  size?: string;
}

const Wapper = styled.div`
  font-size: 16px;
  display: inline-block;
  margin-right: 10px;
  color: #383835;
`;

interface ImgType {
  img: string;
  size?: string;
}

const SwiperImg = stypedFn<ImgType>()(
  style =>
    style.div`
      display: block;
      position: relative;
      background-image: url(${props => props.img});
      width: ${props => (props.size === 'big' ? '185px' : '183px')};
      height: ${props => (props.size === 'big' ? '266px' : '150px')};
    `
);
const SwiperAuthname = styled.label`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-weight: 200;
`;

const SwiperTitle = styled.div`
  margin: 15px 0px 20px 0px;
`;

export function ReciptItem(props: Props) {
  return (
    <Link to={`/recipe/${props.id}`}>
      <Wapper>
        <SwiperImg img={props.img} size={props.size}>
          <SwiperAuthname>{props.author}</SwiperAuthname>
        </SwiperImg>
        <SwiperTitle>{props.name}</SwiperTitle>
      </Wapper>
    </Link>
  );
}
