import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: #1976d2;
  }

  &.active {
    text-decoration: underline;
    color: #1976d2;
  }
`;
