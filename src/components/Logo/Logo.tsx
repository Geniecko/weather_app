import { FC } from 'react';
import styled from 'styled-components/macro';

const Logo: FC = () => {
  return <Content>Weather App</Content>;
};

const Content = styled.span`
  display: block;
  font-size: 2.8rem;
  font-weight: 600;
`;

export default Logo;
