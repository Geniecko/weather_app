import { FC } from 'react';
import styled from 'styled-components/macro';
import { Forecast } from '../DailyForecast/types';
import WeatherValue from '../WeatherValue/WeatherValue';

interface DayForecastCardProps {
  day: Forecast;
}

const ICON_URL = 'http://openweathermap.org/img/wn/';

const DayForecastCard: FC<DayForecastCardProps> = ({ day }) => {
  const wind = Math.floor(day.wind.speed * 3.6);

  const getTemp = (temp: number): string => {
    return `${Math.floor(temp - 273.15)} ${'\u2103'}`;
  };

  return (
    <Card>
      <Time>At: {day.dt_txt.split(' ')[1].slice(0, -3)}</Time>
      <Icon alt='weather' src={`${ICON_URL}${day.weather[0].icon}@2x.png`} />
      <WeatherValue>
        Description: <span>Cloud</span>
      </WeatherValue>
      <WeatherValue>
        Temp: <span>{getTemp(day.main.temp)}</span>
      </WeatherValue>
      <WeatherValue>
        Feels Like: <span>{getTemp(day.main.feels_like)}</span>
      </WeatherValue>
      <WeatherValue>
        Wind: <span>{wind} km/h</span>
      </WeatherValue>
    </Card>
  );
};

const Card = styled.div`
  text-align: center;
`;

const Time = styled.h3`
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 100px;
  filter: brightness(0) invert(1);
`;

export default DayForecastCard;
