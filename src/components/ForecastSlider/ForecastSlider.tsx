import { FC } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import styled from 'styled-components/macro';
import { Forecast } from '../DailyForecast/types';

import '@splidejs/react-splide/css/core';
import DayForecastCard from '../DayForecastCard/DayForecastCard';

interface ForecastSliderProps {
  forecast: Forecast[];
}

const ForecastSlider: FC<ForecastSliderProps> = ({ forecast }) => {
  const slides = forecast.map((day) => (
    <SplideSlide key={day.dt}>
      <DayForecastCard day={day} />
    </SplideSlide>
  ));

  const splideOptions = {
    arrows: true,
    pagination: false,
    gap: '24px',
    perPage: 2,
    perMove: 1,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  };

  return (
    <Container>
      <Splide hasTrack={false} options={splideOptions}>
        <SplideTrack>{slides}</SplideTrack>
        <Navigation className='splide__arrows'>
          <Arrow className='splide__arrow splide__arrow--prev'>
            <BsArrowLeftCircle />
          </Arrow>
          <Arrow className='splide__arrow splide__arrow--next'>
            <BsArrowRightCircle />
          </Arrow>
        </Navigation>
      </Splide>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const Arrow = styled.button`
  padding: 4px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.primary};
  font-size: 2.6rem;
  cursor: pointer;
  transition: all 0.3s;
  line-height: 0;

  &:disabled,
  &[disabled] {
    opacity: 0;
    visibility: hidden;
  }
`;

export default ForecastSlider;
