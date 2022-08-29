import styled from 'styled-components/macro';

interface InputProps {
  search?: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.primary};
  border-radius: ${({ search }) => (search ? '25px 0 0 25px' : '25px')};
  padding: 8px 16px;
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0.25px;
  border-right: ${({ search }) => (search ? 'none' : '1px solid')};

  @media (min-width: 996px) {
    max-width: 350px;
    font-size: 1.6rem;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.primary};
    letter-spacing: 0.5px;
    opacity: 0.25;
  }

  &:active,
  &:focus,
  &:hover {
    outline: 0;
  }
`;

export default Input;
