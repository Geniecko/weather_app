import { FC } from 'react';
import styled from 'styled-components/macro';

const Logo: FC = () => {
  return <Content>Weather App</Content>;
};

const Content = styled.span`
  display: block;
  font-size: 2.2rem;
  font-weight: 600;

  @media (min-width: 576px) {
    font-size: 2.4rem;
  }

  @media (min-width: 992px) {
    font-size: 2.8rem;
  }
`;

export default Logo;
