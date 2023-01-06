import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #fff;
  border-bottom: 3px solid #ffb985;
`;

export const Menu = styled.nav`
  display: flex;
  width: 300px;
  justify-content: space-evenly;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  scale: 1;
  color: grey;
  text-decoration: none;
  border-top: 2px solid transparent;
  transition: all 200ms linear;

  &:hover:not(.active) {
    color: #ffb985;
    border-top: 2px solid #ffb985;
  }

  &.active {
    color: orange;
    border-top: 2px solid #ffb985;
  }
`;

export const Container = styled.div`
  padding: 30px;
  color: grey;
  font-size: 18px;
  line-height: 1.5;
`;
