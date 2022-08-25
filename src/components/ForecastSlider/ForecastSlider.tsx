import { FC } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import styled from 'styled-components/macro';
import { Forecast } from '../DailyForecast/types';

import '@splidejs/react-splide/css/core';
import DayForecastCard from '../DayForecastCard/DayForecastCard';

interface ForecastSliderProps {
  forecastDay: Forecast[];
  dayIndex: number;
}

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ForecastSlider: FC<ForecastSliderProps> = ({ forecastDay, dayIndex }) => {
  const dayInWeek: number = new window.Date().getDay();
  const days = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

  const slides = forecastDay.map((day, index) => (
    <SplideSlide key={index}>
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
      <Day>
        {days[dayIndex]}
        {dayIndex === 0 && <span>(Today)</span>}
      </Day>
      <Date>{forecastDay[0].dt_txt.split(' ')[0]}</Date>
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
  padding-bottom: 24px;
  border-bottom: 1px solid #f2f2f230;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
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

const Day = styled.span`
  display: block;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 12px;

  span {
    font-size: 1.8rem;
    font-weight: 400;
    display: inline-block;
    margin-left: 8px;
  }
`;

const Date = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 24px;
`;

export default ForecastSlider;
