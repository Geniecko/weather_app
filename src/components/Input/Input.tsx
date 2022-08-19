import styled from 'styled-components/macro';

interface InputProps {
  search?: boolean;
}

const Input = styled.input<InputProps>`
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.primary};
  border-radius: ${({ search }) => (search ? '25px 0 0 25px' : '25px')};
  padding: 12px 20px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.25px;
  border-right: ${({ search }) => (search ? 'none' : '1px solid')};

  @media (min-width: 576px){
    min-width: 300px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.primary};
    opacity: 0.33;
  }

  &:active,
  &:focus,
  &:hover {
    outline: 0;
  }
`;

export default Input;
