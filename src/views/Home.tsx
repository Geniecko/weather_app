import { FC } from 'react';
import styled from 'styled-components/macro';
import SearchBar from '../components/SearchBar/SearchBar';
import WeatherSlider from '../components/WeatherSlider/WeatherSlider';

// const polandCities = [
//   'Warszawa',
//   'Kraków',
//   'Katowice',
//   'Gdańsk',
//   'Rzeszów',
//   'Wrocław',
//   'Poznań',
//   'Łódź',
// ];

const polandCities = ['Warszawa', 'Kraków', 'Katowice'];

// const worldCities = [
//   'Paris',
//   'New York',
//   'Barcelona',
//   'Amsterdam',
//   'London',
//   'Budapeszt',
//   'Zagrzeb',
//   'Berlin',
// ];

const Home: FC = () => {
  return (
    <>
      <SearchBar />
      <Slider>
        <WeatherSlider cities={polandCities} />
      </Slider>
      {/* <Slider>
        <WeatherSlider cities={worldCities} />
      </Slider> */}
    </>
  );
};

const Slider = styled.div`
  margin-top: 24px;
`;

export default Home;
