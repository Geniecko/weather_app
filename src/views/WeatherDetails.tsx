import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BsArrowLeftCircle } from 'react-icons/bs';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setStatus } from '../store/slices/weatherSlice';
import { ROUTES } from '../router/constants';

const WeatherDetails: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const weather = useAppSelector((state) => state.weather.data);

  const handleOnClick = () => {
    dispatch(setStatus('idle'));
    navigate(-1);
  }

  useEffect(() => {
    if(weather === null){
      navigate(`${ROUTES.HOME}`)
    }
  },[])

  return (
    <Container>
      <GoBackButton onClick={handleOnClick}><BsArrowLeftCircle/></GoBackButton>
      {weather && <CurrentWeather weather={weather} />}
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
  font-size: 2.8rem;
  color: ${({theme}) => theme.primary};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export default WeatherDetails;
