import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  margin: 0;
  padding: 0;
  border-radius: 8px;
`;

export const Details = styled.div`
  padding-left: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #ffb985;
`;

export const Votes = styled.span`
  background-color: #ffb985;
  color: #fff;
  padding: 2px 4px;
  border-radius: 5px;
  font-weight: bold;
`;

export const BackLink = styled(NavLink)`
  display: block;
  width: 80px;
  margin-bottom: 16px;
  color: #333333;
  text-decoration: none;
  transition: all 200ms linear;

  &:hover {
    color: #ffb985;
  }
`;
