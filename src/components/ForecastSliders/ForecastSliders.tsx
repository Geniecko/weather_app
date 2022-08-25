import { FC } from 'react';
import { Accordion } from 'react-accessible-accordion';
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

  return (
    <Container>
      <StyledAccordion as={Accordion}>{sliders}</StyledAccordion>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const StyledAccordion = styled.div`
  border: none;
`;

export default ForecastSliders;
