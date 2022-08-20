import { FC } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading/Loading';
import { useAppSelector } from '../store/hooks';

const Alerts: FC = () => {
  const isLoading = useAppSelector((state) => state.weather.loading);
  const error = useAppSelector((state) => state.weather.error);

  return (
    <StyledAlerts>
      <Alert>{isLoading && <Loading />}</Alert>
      <Alert>{error.message > '' ? 'No results found' : null}</Alert>
    </StyledAlerts>
  );
};

const StyledAlerts = styled.div`
  padding: 16px 0;
  position: relative;
  height: 25px;
`;

const Alert = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Alerts;
