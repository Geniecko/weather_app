import { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { API_WEATHER_URL } from '../../api/data';
import { getWeather } from '../../store/actions/weatherActions';
import { useAppDispatch } from '../../store/hooks';
import { WeatherData } from '../../store/types';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import WeatherValue from '../WeatherValue/WeatherValue';

interface WeatherCardProps {
  city: string;
}

const WeatherCard: FC<WeatherCardProps> = ({ city }) => {
  const [weather, setWeather] = useState({} as WeatherData);
  const [isWeather, setIsWeather] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const getCurrentWeather = async (cityName: string) => {
    const response = await fetch(
      `${API_WEATHER_URL}&q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );

    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      setIsError(true);
      setIsLoading(false);
      throw new Error(message);
    }

    const responseData: WeatherData = await response.json();
    setWeather(responseData);
    setIsLoading(false);
    setIsWeather(true);
  };

  const handleOnClick = () => {
    dispatch(getWeather(weather.name));
  };

  useEffect(() => {
    getCurrentWeather(city);
  }, []);

  const wind = isWeather && Math.floor(weather.wind.speed * 3.6);
  const getTemp = (temp: number): string => {
    return `${Math.floor(temp - 273.15)} ${'\u2103'}`;
  };

  return (
    <>
      {isLoading ? <Loading /> : isError && <span>Not found</span>}
      {isWeather && (
        <Card>
          <Name>
            {weather.name}, {weather.sys.country}
          </Name>
          <WeatherValue>
            Description: <span>{weather.weather[0].main}</span>
          </WeatherValue>
          <WeatherValue>
            Temp: <span>{getTemp(weather.main.temp)}</span>
          </WeatherValue>
          <WeatherValue>
            Feels like: <span>{getTemp(weather.main.feels_like)}</span>
          </WeatherValue>
          <WeatherValue>
            Wind: <span>{wind} km/h</span>
          </WeatherValue>
          <Button secondary onClick={handleOnClick}>
            Details
          </Button>
        </Card>
      )}
    </>
  );
};

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 16px 24px;
`;

const Name = styled.h3`
  font-size: 2.6rem;
  font-weight: 600;
  margin-bottom: 24px;
`;

export default WeatherCard;
