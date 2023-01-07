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
  width: 500px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #ff6d00;
`;

export const Votes = styled.span`
  background-color: #ff6d00;
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
    color: #ff6d00;
  }
`;
