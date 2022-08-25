import styled from 'styled-components/macro';

const WeatherValue = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 16px;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }


  &:last-child {
    margin-bottom: 0;
  }

  span {
    display: inline-block;
    font-weight: 600;
    font-size: 1.6rem;
    margin-left: 8px;

    @media (min-width: 576px) {
      font-size: 1.8rem;
    }
  }
`;

export default WeatherValue;
