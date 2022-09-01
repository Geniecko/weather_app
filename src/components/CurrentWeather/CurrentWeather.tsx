import { FC } from 'react';
import { WeatherData } from '../../store/types';
import styled from 'styled-components/macro';
import WeatherValue from '../WeatherValue/WeatherValue';

interface CurrentWeatherProps {
  weather: WeatherData;
}

const ICON_URL = 'https://openweathermap.org/img/wn/';

const CurrentWeather: FC<CurrentWeatherProps> = ({ weather }) => {
  const wind = Math.floor(weather.wind.speed * 3.6);

  const getTime = (unixTime: number): string => {
    return new Date(unixTime * 1000).toLocaleTimeString();
  };

  const getTemp = (temp: number): string => {
    return `${Math.floor(temp - 273.15)} ${'\u2103'}`;
  };

  return (
    <Container>
      <DetailsPanel>
        <Icon alt='weather' src={`${ICON_URL}${weather.weather[0].icon}@2x.png`} />
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
        <WeatherValue>
          Humidity: <span>{weather.main.humidity} %</span>
        </WeatherValue>
        <WeatherValue>
          Air pressure: <span>{weather.main.pressure} PS</span>
        </WeatherValue>
        <WeatherValue>
          Sunrise: <span>{getTime(weather.sys.sunrise)}</span>
        </WeatherValue>
        <WeatherValue>
          Sunset: <span>{getTime(weather.sys.sunset)}</span>
        </WeatherValue>
      </DetailsPanel>
      <Name>
        {weather.name}, {weather.sys.country}
      </Name>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 24px;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 20px;
  }

  @media (min-width: 996px) {
    padding: 24px;
  }
`;

const DetailsPanel = styled.div`
  text-align: left;
`;

const Icon = styled.img`
  min-width: 50px;
  align-self: center;
  filter: brightness(0) invert(1);
`;

const Name = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;

  @media (min-width: 576px) {
      font-size: 2.8rem;
    }

    @media (min-width: 996px) {
      font-size: 3rem;
    }
`;

export default CurrentWeather;
