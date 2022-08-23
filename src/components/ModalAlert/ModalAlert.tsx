import { FC, Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setAlert } from '../../store/slices/alertSlice';
import Button from '../Button/Button';

interface ModalAlertProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const ModalAlert: FC<ModalAlertProps> = ({ onClose }) => {
  const alertMessage = useAppSelector((state) => state.alert.message);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setAlert(''));
    onClose(false);
  };

  return createPortal(
    <Background>
      <Container>
        <Alert>{alertMessage}</Alert>
        <Button secondary onClick={handleOnClick}>
          Close
        </Button>
      </Container>
    </Background>,
    document.body,
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 16px;
  border-radius: 25px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-width: 320px;
`;

const Alert = styled.span`
  width: 100%;
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
`;

export default ModalAlert;
