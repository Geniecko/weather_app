import { FC } from 'react';
import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import WeatherDetails from '../views/WeatherDetails';
import { ROUTES } from './constants';

const Routes: FC = () => {
  return (
    <RoutesWrapper>
      <Route path='*' element={<NotFound />} />

      <Route path={`${ROUTES.HOME}`} element={<Home />} />
      <Route path={`${ROUTES.WEATHER_DETAILS}`} element={<WeatherDetails />} />
    </RoutesWrapper>
  );
};

export default Routes;
