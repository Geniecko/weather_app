import { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { API_FORECAST_URL } from '../../api/data';
import ForecastSlider from '../ForecastSlider/ForecastSlider';
import Loading from '../Loading/Loading';
import { Forecast, ForecastData } from './types';

interface DailyForecastProps {
  coord: {
    lon: number;
    lat: number;
  };
}

const DailyForecast: FC<DailyForecastProps> = ({ coord }) => {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [isError, setIsError] = useState(false);

  const getForecast = async (lon: number, lat: number) => {
    const response = await fetch(
      `${API_FORECAST_URL}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );

    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      setIsError(true);
      throw new Error(message);
    }

    const responseData: ForecastData = await response.json();
    setForecast(responseData);
  };

  useEffect(() => {
    getForecast(coord.lat, coord.lon);
  }, []);

  const getDaysFromArray = (): Forecast[] => {
    let forecastDays: Forecast[] = [];
    const time = new Date().toLocaleTimeString();

    if (forecast) {
      if (Number(time.slice(0, 2)) < 15) {
        forecast.list.splice(0, 6);
      }

      forecastDays = forecast.list.filter((item) => {
        return item.dt_txt.split(' ')[1] === '15:00:00';
      });
    }
    return forecastDays;
  };

  return (
    <Container>
      <Title>Other Days Forecast</Title>
      {forecast ? (
        <>
          <ForecastSlider forecast={getDaysFromArray()} />
        </>
      ) : isError ? (
        <span>Not found</span>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 24px;
  padding: 24px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;
`;

const Title = styled.span`
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f2f2f230;
  display: block;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
`;

export default DailyForecast;
