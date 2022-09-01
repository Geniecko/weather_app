import { FC, useEffect, useState } from 'react';
import { API_GEO_DB_URL, geoApiOptions } from '../../api/data';
import Loading from '../Loading/Loading';
import { GeoData, CitiesArray } from './types';
import styled from 'styled-components/macro';

interface CitiesHintsProps {
  city: string;
}

const CitiesHints: FC<CitiesHintsProps> = ({ city }) => {
  const [isError, setIsError] = useState(false);
  const [cities, setCities] = useState<CitiesArray[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCities = async (value: string) => {
    const response = await fetch(
      `${API_GEO_DB_URL}/cities?limit=5&minPopulation=500000&namePrefix=${value.toLowerCase()}`,
      geoApiOptions,
    );

    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      setIsError(true);
      throw new Error(message);
    }

    const responseData: GeoData = await response.json();
    setIsError(false);
    setIsLoading(false);
    setCities(responseData.data);
  };

  useEffect(() => {
    if (city.trim() !== '') {
      setIsLoading(true);
      const timeOutId = setTimeout(() => getCities(city), 500);
      return () => {
        clearTimeout(timeOutId);
        setIsLoading(false);
      };
    }
  }, [city]);

  const citiesList = cities.map((item) => <CityButton key={item.name} >{item.name}, {item.country}</CityButton>);
  console.log(cities);

  return (
    <Container>
      {isLoading && <Loading />}
      {!isError && cities.length > 0 && <>{citiesList}</>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
`;


const CityButton = styled.button`
  background: ${({theme}) => theme.primary};
  border: none;
  padding: 6px 12px;
  border-radius: 25px;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 600;
  color: ${({theme}) => theme.secondary};
`;

export default CitiesHints;
