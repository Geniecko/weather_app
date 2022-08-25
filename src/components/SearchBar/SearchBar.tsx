import { FC, ChangeEvent, useState, FormEvent, useEffect } from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getWeather } from '../../store/actions/weatherActions';
import ModalAlert from '../ModalAlert/ModalAlert';
import { setAlert } from '../../store/slices/alertSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { setStatus } from '../../store/slices/weatherSlice';

const SearchBar: FC = () => {
  const navigate = useNavigate();
  const errorMessage = useAppSelector((state) => state.weather.error.message);
  const weatherName = useAppSelector((state) => state.weather.data?.name);
  const status = useAppSelector((state) => state.weather.status);
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (city.trim() === '') {
      dispatch(setAlert('Please fill in the field'));
      setIsOpenModal(true);
      return;
    }

    dispatch(getWeather(city));
    setCity('');
  };

  useEffect(() => {
    if (status === 'rejected') {
      dispatch(setStatus('idle'));
      dispatch(setAlert(errorMessage));
      setIsOpenModal(true);
    } else if (status === 'ok') {
      dispatch(setStatus('idle'));
      navigate(`${ROUTES.HOME}${weatherName?.toLocaleLowerCase()}`);
    }
  }, [status]);

  return (
    <Wrapper>
      <Logo />
      <Form onSubmit={handleOnSubmit}>
        <Input placeholder='City name' search onChange={handleOnChange} value={city} />
        <Button secondary search>
          <FaSearch />
        </Button>
      </Form>
      {isOpenModal && <ModalAlert onClose={setIsOpenModal} />}
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
