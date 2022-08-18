import { getWeather } from './store/actions/weatherActions';
import { useAppDispatch } from './store/hooks';
import MainTemplate from './templates/MainTemplate';

const App = () => {
  const dispatch = useAppDispatch();

  const getData = () => {
    dispatch(getWeather('warszawa'));
  };

  return (
    <>
      <MainTemplate>
        <h1>asd</h1>
      </MainTemplate>
      <button onClick={getData}>Pobierz dane</button>
    </>
  );
};

export default App;
