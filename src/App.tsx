import MainTemplate from './templates/MainTemplate';
import styled from 'styled-components/macro';
import Alerts from './Alerts/Alerts';
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { useAppSelector } from './store/hooks';

const App = () => {
  const weather = useAppSelector(state => state.weather.data);

  return (
    <MainTemplate>
      <div className='app-overlay'>
        <Container>
          <SearchBar />
          <Alerts />
          {weather && <CurrentWeather weather={weather} />}
        </Container>
      </div>
    </MainTemplate>
  );
};

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export default App;
