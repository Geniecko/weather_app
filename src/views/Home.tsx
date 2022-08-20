import { FC } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setAlert } from '../store/slices/alertSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setAlert('jakakis tam aler'));
  };

  return <button onClick={handleOnClick}>sdas</button>;
};

export default Home;
