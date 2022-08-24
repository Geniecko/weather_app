import { FC } from 'react';
import styled from 'styled-components/macro'
import { Forecast } from '../DailyForecast/types';
import WeatherValue from '../WeatherValue/WeatherValue';

interface DayForecastCardProps {
  day: Forecast;
}

const ICON_URL = 'http://openweathermap.org/img/wn/';

const DayForecastCard: FC<DayForecastCardProps> = ({day}) => {
  console.log(day);
  
  return (
    <Card>
      <Day>Sunday</Day>
      <Icon src={`${ICON_URL}${day.weather[0].icon}@2x.png`} />
      <WeatherValue>
        Description: <span>Cloud</span>
      </WeatherValue>
      <WeatherValue>
        Temp: <span>22 {'\u2103'}</span>
      </WeatherValue>
      <WeatherValue>
        Feels Like: <span>22 {'\u2103'}</span>
      </WeatherValue>
      <WeatherValue>
        Wind: <span>22 km/h</span>
      </WeatherValue>
    </Card>
  );
};

const Card = styled.div``;

const Day = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 100px;
  filter: brightness(0) invert(1);
`;

export default DayForecastCard;
