import { FC } from 'react';
import styled from 'styled-components/macro';
import { Forecast } from '../DailyForecast/types';
import ForecastSlider from '../ForecastSlider/ForecastSlider';

interface ForecastSlidersProps {
  forecastDays: Forecast[][] | null;
}

const ForecastSliders: FC<ForecastSlidersProps> = ({ forecastDays }) => {
  const sliders = forecastDays?.map((forecastDay, index) => (
    <ForecastSlider forecastDay={forecastDay} dayIndex={index} key={index} />
  ));

  return <Container>{sliders}</Container>;
};

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export default ForecastSliders;
