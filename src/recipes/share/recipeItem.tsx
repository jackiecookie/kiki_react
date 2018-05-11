import * as React from 'react';
import { Link } from 'react-router-dom';
export interface Props {
  id: string;
  author: string;
  name: string;
  img: string;
}

export function ReciptItem(props: Props) {
  const divStyle = {
    backgroundImage: `url(${props.img})`
  };
  return (
    <Link to={`/recipe/${props.id}`}>
      <div className="title_Wapper">
        <div style={divStyle} className="swiper_img">
          <label className="kiki_swiper_authName">{props.author}</label>
        </div>
        <div className="kiki_swiper_title">{props.name}</div>
        {/* <img src={props.img} alt={props.name} className="swiper_img" /> */}
      </div>
    </Link>
  );
}
