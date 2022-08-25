import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BsArrowLeftCircle } from 'react-icons/bs';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { useAppSelector } from '../store/hooks';
import { ROUTES } from '../router/constants';
import AirPolution from '../components/AirPulution/AirPolution';
import DailyForecast from '../components/DailyForecast/DailyForecast';

const WeatherDetails: FC = () => {
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.weather.status);
  const weather = useAppSelector((state) => state.weather.data);

  const handleOnClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (status === 'init') {
      navigate(`${ROUTES.HOME}`);
    }
  }, [status]);

  return (
    <Container>
      <GoBackButton onClick={handleOnClick}>
        <BsArrowLeftCircle />
      </GoBackButton>
      {weather && (
        <>
          <CurrentWeather weather={weather} />
          <DailyForecast coord={weather?.coord} />
          <AirPolution coord={weather?.coord} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoBackButton = styled.button`
  align-self: flex-start;
  margin-top: 24px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.primary};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 576px) {
      font-size: 2.6rem;
    }

    @media (min-width: 996px) {
      font-size: 2.8rem;
    }
`;

export default WeatherDetails;
