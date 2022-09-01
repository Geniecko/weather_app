import { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { API_AIR_POLUTION_URL } from '../../api/data';
import Loading from '../Loading/Loading';
import WeatherValue from '../WeatherValue/WeatherValue';
import { AirPolutionData, AirPolutionList } from './types';

interface AirPolutionProps {
  coord: {
    lon: number;
    lat: number;
  };
}

enum PolutionIndex {
  'Good' = 1,
  'Fair',
  'Moderate',
  'Poor',
  'Very Poor',
}

const AirPolution: FC<AirPolutionProps> = ({ coord }) => {
  const [airPolution, setAirPolution] = useState<AirPolutionList[] | []>([]);
  const [isError, setIsError] = useState(false);

  const getAirPolution = async (lon: number, lat: number) => {
    const response = await fetch(
      `${API_AIR_POLUTION_URL}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );

    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      setIsError(true);
      throw new Error(message);
    }

    const responseData: AirPolutionData = await response.json();
    
    if (responseData.list.length > 0) {
      setAirPolution(responseData.list);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    getAirPolution(coord.lon, coord.lat);
  }, []);

  const getPolutionName = (index: number): string => {
    return PolutionIndex[index];
  };

  return (
    <Container>
      <Title>Air Polution</Title>
      {airPolution.length > 0 ? (
        <>
          <WeatherValue>
            Description: <span>{getPolutionName(airPolution[0].main.aqi)}</span>
          </WeatherValue>
          <WeatherValue>
            Carbon monoxide:{' '}
            <span>{Math.floor(airPolution[0].components.co * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Nitrogen monoxide:{' '}
            <span>{Math.floor(airPolution[0].components.no * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Nitrogen dioxide:{' '}
            <span>{Math.floor(airPolution[0].components.no2 * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Ozone: <span>{Math.floor(airPolution[0].components.o3 * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Sulphur dioxide:{' '}
            <span>{Math.floor(airPolution[0].components.so2 * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Fine particles matter:{' '}
            <span>{Math.floor(airPolution[0].components.pm2_5 * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Coarse particulate matter:{' '}
            <span>{Math.floor(airPolution[0].components.pm10 * 100) / 100} μg/m3</span>
          </WeatherValue>
          <WeatherValue>
            Ammonia: <span>{Math.floor(airPolution[0].components.nh3 * 100) / 100} μg/m3</span>
          </WeatherValue>
        </>
      ) : isError ? (
        <ErrorMessage>Not found</ErrorMessage>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 24px;
  padding: 24px 16px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;

  @media (min-width: 576px) {
    padding: 24px 20px;
  }

  @media (min-width: 996px) {
    padding: 24px;
  }
`;

const Title = styled.span`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f2f2f230;
  display: block;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
`;

const ErrorMessage = styled.span`
  width: 100%;
  display: block;
  text-align: center;
`;
export default AirPolution;
