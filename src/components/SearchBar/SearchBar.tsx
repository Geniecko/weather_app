import { FC, ChangeEvent, useState, FormEvent } from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch } from '../../store/hooks';
import { getWeather } from '../../store/actions/weatherActions';

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (city.trim() === '') {
      alert('wypełnij pole - testowo');
      return;
    }

    dispatch(getWeather(city));
    setCity('');
  };

  return (
    <Wrapper>
      <Logo />
      <Form onSubmit={handleOnSubmit}>
        <Input placeholder='City name' search onChange={handleOnChange} value={city} />
        <Button secondary search>
          <FaSearch />
        </Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
`;

export default SearchBar;
