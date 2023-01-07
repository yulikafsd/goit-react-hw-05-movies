import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
  border-bottom: 3px solid #ff6d00;
`;

export const Menu = styled.nav`
  display: flex;
  width: 300px;
  justify-content: space-evenly;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  scale: 1;
  color: #333333;
  text-decoration: none;
  border-top: 2px solid transparent;
  transition: all 200ms linear;

  &:hover:not(.active) {
    color: #ff6d00;
    border-top: 2px solid #ff6d00;
  }

  &.active {
    color: #ff6d00;
    border-top: 2px solid #ff6d00;
  }
`;

export const Container = styled.div`
  padding: 32px;
  color: #333333;
  font-size: 18px;
  line-height: 1.5;
`;
