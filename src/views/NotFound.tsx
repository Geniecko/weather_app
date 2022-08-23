import { FC } from 'react';
import styled from 'styled-components/macro';

const NotFound: FC = () => {
  return <Message>Page not found</Message>;
};

const Message = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  width: 100%;
  margin-top: 64px;
`;

export default NotFound;
