import { FC } from 'react';
import styled from 'styled-components/macro';
import SearchBar from '../components/SearchBar/SearchBar';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { useAppSelector } from '../store/hooks';
import Loading from '../components/Loading/Loading';

const MainView: FC = () => {
  const weather = useAppSelector(state => state.weather.data);
  const isLoading = useAppSelector(state => state.weather.loading);
  const error = useAppSelector(state => state.weather.error);

  return (
    <Container>
      <SearchBar />
      <AlertsPanel>
        <Alert>
          {isLoading && <Loading />}
        </Alert>
        <Alert>
          {error.message > '' ? 'No results found' : null}
        </Alert>
      </AlertsPanel>
      {weather && <CurrentWeather weather={weather}/>}
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const AlertsPanel = styled.div`
  padding: 16px 0;
  position: relative;
  height: 25px;
`;

const Alert = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MainView;
