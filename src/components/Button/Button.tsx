import { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface ButtonProps {
  children: string | ReactNode;
  secondary?: boolean;
  search?: boolean;
}

const Button: FC<ButtonProps> = ({ children, secondary, search }) => {
  return (
    <ButtonStyled secondary={secondary} search={search}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  border: 1px solid ${({ secondary, theme }) => (secondary ? theme.primary : 'transparent')};
  background-color: ${({ secondary, theme }) => (secondary ? 'transparent' : theme.primary)};
  border-left: ${({ search }) => (search ? 'none' : '1px solid')};
  border-radius: ${({ search }) => (search ? '0 25px 25px 0' : '25px')};
  padding: ${({ search }) => (search ? '0' : '12px 20px')};
  color: ${({ secondary, theme }) => (secondary ? theme.primary : theme.secondary)};
  font-weight: 500;
  font-size: 1.6rem;
  display: flex;
  justify-content: ${({ search }) => (search ? 'center' : 'space-between')};
  align-items: center;
  gap: 8px;
  width: ${({ search }) => (search ? '44px' : 'unset')};
  height: ${({ search }) => (search ? '44px' : 'unset')};
  transition: 0.3s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    outline: 0;
  }

  &:hover {
    background-color: ${({ secondary, theme }) => (secondary ? theme.primary : theme.secondary)};
    color: ${({ secondary, theme }) => (secondary ? theme.secondary : theme.primary)};
  }
`;

export default Button;
