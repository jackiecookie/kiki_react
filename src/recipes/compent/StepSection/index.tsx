import * as React from 'react';
import styled from 'styled-components';
import SubTitle from '../share/subTitle';

const AsideSubTitle = SubTitle.withComponent('aside');

const Section = styled.section`
  padding-top: 40px;
  position: relative;
}
`;

const Img = styled.img`
  width: 100%;
  height: 301px;
`;

const Detail = styled.p`
  font-size: 17px;
  width: 100%;
  margin-top: 15px;
  line-height: 1.6;
  text-align: justify;
`;

export interface StepDetailType {
  image: string;
  detail: string;
}

interface Props {
  steps: StepDetailType[];
}

export default class StepSection extends React.Component<Props> {
  render() {
    const { steps } = this.props;
    return (
      <Section>
        <ul className="plain">
          {steps &&
            steps.map((item, index) => (
              <li key={index}>
                <AsideSubTitle>步骤 {index + 1}</AsideSubTitle>
                <article>
                  <div>
                    <Img src={item.image} alt={item.image} />
                  </div>
                  <Detail>{item.detail}</Detail>
                </article>
              </li>
            ))}
        </ul>
      </Section>
    );
  }
}
