import { FC } from 'react';
import { WeatherData } from '../../store/types';
import styled from 'styled-components/macro';

interface CurrentWeatherProps {
  weather: WeatherData;
}

const ICON_URL = 'http://openweathermap.org/img/wn/';

const CurrentWeather: FC<CurrentWeatherProps> = ({ weather }) => {
  const temp = Math.floor(weather.main.temp - 273.15);
  const tempFeelsLike = Math.floor(weather.main.feels_like - 273.15);
  const wind = Math.floor(weather.wind.speed * 3.6);

  const getTime = (unixTime: number): string => {
    const date = new Date(unixTime * 1000);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = Number(minutes.toString().padStart(2, '0'));

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <Wrapper>
      <DetailsPanel>
        <Icon src={`${ICON_URL}${weather.weather[0].icon}@2x.png`} />
        <Detail>
          Description: <span>{weather.weather[0].main}</span>
        </Detail>
        <Detail>
          Temp:{' '}
          <span>
            {temp} {'\u2103'}
          </span>
        </Detail>
        <Detail>
          Feels like:{' '}
          <span>
            {tempFeelsLike} {'\u2103'}
          </span>
        </Detail>
        <Detail>
          Wind: <span>{wind} km/h</span>
        </Detail>
        <Detail>
          Humidity: <span>{weather.main.humidity} %</span>
        </Detail>
        <Detail>
          Air pressure: <span>{weather.main.pressure} PS</span>
        </Detail>
        <Detail>
          Sunrise: <span>{getTime(weather.sys.sunrise)}</span>
        </Detail>
        <Detail>
          Sunset: <span>{getTime(weather.sys.sunset)}</span>
        </Detail>
      </DetailsPanel>
      <Name>
        {weather.name}, {weather.sys.country}
      </Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 24px;
  gap: 16px;
  padding: 24px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
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
  font-size: 3.2rem;
  font-weight: 600;
`;

const Detail = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  span {
    font-weight: 600;
    font-size: 1.8rem;
    margin-left: 8px;

    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
  }
`;

export default CurrentWeather;
