import { FC } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar/SearchBar';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const Home: FC = () => {
  return (
    <>
      <SearchBar />
      <WeatherList>
        <WeatherCard city={'Warszawa'}/>
        <WeatherCard city={'Kraków'}/>
        <WeatherCard city={'Rzeszów'}/>
        <WeatherCard city={'Gdańsk'}/>
        <WeatherCard city={'Katowice'}/>
        <WeatherCard city={'Krosno'}/>
        <WeatherCard city={'Gliwice'}/>
        <WeatherCard city={'Lublin'}/>
      </WeatherList>
    </>
  );
};

const WeatherList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 48px;

  @media (min-width: 576px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Home;
