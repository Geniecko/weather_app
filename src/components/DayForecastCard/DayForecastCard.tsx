import { FC } from 'react';
import styled from 'styled-components/macro';
import { Forecast } from '../DailyForecast/types';
import WeatherValue from '../WeatherValue/WeatherValue';

interface DayForecastCardProps {
  day: Forecast;
  dayIndex: number;
}

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ICON_URL = 'http://openweathermap.org/img/wn/';

const DayForecastCard: FC<DayForecastCardProps> = ({ day, dayIndex }) => {
  const dayInAWeek = new Date().getDay();
  const wind = Math.floor(day.wind.speed * 3.6);

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek),
  );

  const getTemp = (temp: number): string => {
    return `${Math.floor(temp - 273.15)} ${'\u2103'}`;
  };

  return (
    <Card>
      <Day>
        <span>{day.dt_txt}</span>
        {forecastDays[dayIndex]}
      </Day>
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

const Card = styled.div``;

const Day = styled.h3`
  font-size: 2rem;
  font-weight: 600;

  span {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

const Icon = styled.img`
  width: 100px;
  filter: brightness(0) invert(1);
`;

export default DayForecastCard;
