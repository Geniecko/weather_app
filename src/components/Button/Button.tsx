import { ReactNode } from 'react';
import styled from 'styled-components/macro';

interface ButtonProps {
  children: string | ReactNode;
  secondary?: boolean;
  search?: boolean;
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: 1px solid ${({ secondary, theme }) => (secondary ? theme.primary : 'transparent')};
  background-color: ${({ secondary, theme }) => (secondary ? 'transparent' : theme.primary)};
  border-radius: ${({ search }) => (search ? '0 25px 25px 0' : '25px')};
  padding: ${({ search }) => (search ? '0' : '8px 16px')};
  color: ${({ secondary, theme }) => (secondary ? theme.primary : theme.secondary)};
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-width: ${({ search }) => (search ? 'unset' : '125px')};
  gap: 8px;
  width: ${({ search }) => (search ? '44px' : 'unset')};
  height: ${({ search }) => (search ? '44px' : 'unset')};
  transition: 0.2s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    outline: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ secondary, theme }) => (secondary ? theme.primary : theme.secondary)};
      color: ${({ secondary, theme }) => (secondary ? theme.secondary : theme.primary)};
    }
  }
`;

export default Button;
