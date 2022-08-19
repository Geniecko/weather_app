import { FC } from 'react';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

const Loading: FC = () => {
  return (
    <StyledLoading>
      <Dot />
      <Dot />
      <Dot />
    </StyledLoading>
  );
};

const loadingDots = keyframes`
  0% {
    left: -150px;
    opacity: 0;
  }
  20% {
    left: 0px;
    opacity: 1;
  }
  80% {
    left: 100px;
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: 200px;
  }
`;

const StyledLoading = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  transform: scale(.25,.25);
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  opacity: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};

  &:nth-child(1) {
    animation: ${loadingDots} 1.5s infinite linear 1s;
  }

  &:nth-child(2) {
    animation: ${loadingDots} 1.5s infinite linear 0.5s
  }

  &:nth-child(3) {
    animation: ${loadingDots} 1.5s infinite linear;
  }
`;

export default Loading;
