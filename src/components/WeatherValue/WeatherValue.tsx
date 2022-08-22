import styled from 'styled-components/macro';

const WeatherValue = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  span {
    font-weight: 600;
    font-size: 1.6rem;
    margin-left: 8px;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

export default WeatherValue;