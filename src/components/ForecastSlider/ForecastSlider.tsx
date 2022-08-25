import { FC } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { BsArrowRightCircle, BsArrowLeftCircle, BsArrowDownCircle } from 'react-icons/bs';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { Forecast } from '../DailyForecast/types';
import DayForecastCard from '../DayForecastCard/DayForecastCard';

import '@splidejs/react-splide/css/core';

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
      <AccordionItem>
        <AccordionItemHeading>
          <StyledAccordionItemButton as={AccordionItemButton}>
            <Day>
              {days[dayIndex]}
              {dayIndex === 0 && <span>(Today)</span>}
            </Day>
            <Date>{forecastDay[0].dt_txt.split(' ')[0]}</Date>
            <BsArrowDownCircle />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel as={AccordionItemPanel}>
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
        </StyledAccordionItemPanel>
      </AccordionItem>
    </Container>
  );
};

const fadeIn = keyframes`
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
`;

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
  margin-top: 24px;
`;

const Arrow = styled.button`
  padding: 4px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.primary};
  font-size: 2.2rem;
  cursor: pointer;
  transition: all 0.3s;
  line-height: 0;

  @media (min-width: 576px) {
      font-size: 2.4rem;
    }

    @media (min-width: 996px) {
      font-size: 2.6rem;
    }

  &:disabled,
  &[disabled] {
    opacity: 0;
    visibility: hidden;
  }
`;

const Day = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 12px;

  @media (min-width: 576px) {
    font-size: 2.2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
    display: inline-block;
    margin-left: 8px;

    @media (min-width: 576px) {
      font-size: 1.8rem;
    }
  }
`;

const Date = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
`;

const StyledAccordionItemButton = styled.button`
  background: none;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: transparent;
  }

  &[aria-expanded='true'] {
    svg {
      display: none;
    }
  }

  svg {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 2.2rem;
    margin: 4px;

    @media (min-width: 576px) {
      font-size: 2.4rem;
    }

    @media (min-width: 996px) {
      font-size: 2.6rem;
    }
  }
`;

const StyledAccordionItemPanel = styled.div`
  margin-top: 24px;
  padding: 0;
  animation: ${fadeIn} 0.35s ease-in;
`;

export default ForecastSlider;
