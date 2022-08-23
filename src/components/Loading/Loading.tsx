import { FC } from 'react';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

const Loading: FC = () => {
  return (
    <Wrapper>
      <span>Loading</span>
      <StyledLoading>
        <Dot />
        <Dot />
        <Dot />
      </StyledLoading>
    </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 600;
  }
`;

const StyledLoading = styled.div`
  position: relative;
  width: 100px;
  height: 30px;
  transform: scale(0.25, 0.25);
`;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  opacity: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};

  &:nth-child(1) {
    animation: ${loadingDots} 1.5s infinite linear 1s;
  }

  &:nth-child(2) {
    animation: ${loadingDots} 1.5s infinite linear 0.5s;
  }

  &:nth-child(3) {
    animation: ${loadingDots} 1.5s infinite linear;
  }
`;

export default Loading;
