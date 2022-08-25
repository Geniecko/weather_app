import { FC } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import styled from 'styled-components/macro';
import WeatherCard from '../WeatherCard/WeatherCard';

import '@splidejs/react-splide/css/core';

interface WeatherSliderProps {
  cities: string[];
}

const WeatherSlider: FC<WeatherSliderProps> = ({ cities }) => {
  const slides = cities.map((city) => (
    <SplideSlide key={city}>
      <WeatherCard city={city} />
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
  border-radius: 25px;
  padding: 24px 16px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;

  @media (min-width: 576px) {
    padding: 24px 20px;
  }

  @media (min-width: 996px) {
    padding: 24px;
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

export default WeatherSlider;
