import { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { API_FORECAST_URL } from '../../api/data';
import ForecastSliders from '../ForecastSliders/ForecastSliders';
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
  const [forecastDays, setForecastDays] = useState<Forecast[][] | null>(null);
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

  const createForecastDaysArray = (): void => {
    const forecastArray = forecast?.list;
    const forecastDaysArray: Forecast[][] = [];
    let index = 0;

    if (forecastArray) {
      while (index !== -1) {
        index = forecastArray.findIndex((item) => item.dt_txt.split(' ')[1] === '00:00:00');
        if (index === 0) {
          index = 8;
        }

        if (forecastArray.length > 0) {
          forecastDaysArray.push(forecastArray.slice(0, index));
          forecastArray.splice(0, index);
        }
      }
    }

    setForecastDays(forecastDaysArray);
  };

  useEffect(() => {
    if (forecast === null) return;
    createForecastDaysArray();
  }, [forecast]);

  useEffect(() => {
    getForecast(coord.lon, coord.lat);
  }, []);

  return (
    <Container>
      <Title>Hourly forecast</Title>
      {forecast ? (
        <ForecastSliders forecastDays={forecastDays} />
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
