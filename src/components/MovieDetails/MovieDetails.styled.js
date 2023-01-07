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

export const Subtitle = styled.h3`
  margin-bottom: 0;
`;

export const Text = styled.p`
  margin-top: 0;
  font-weight: normal;
  font-size: 18px;
`;

export const Votes = styled.span`
  background-color: #ff6d00;
  color: #fff;
  padding: 2px 4px;
  border-radius: 5px;
  font-weight: bold;
`;

export const Span = styled.span`
  font-weight: normal;
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

export const StyledLink = styled(NavLink)`
  display: block;
  margin-left: 20px;
  width: 100px;
  font-weight: bold;
  text-decoration: none;
  color: #333333;
  transition: all 200ms linear;

  &:hover,
  &:active {
    color: #ff6d00;
  }
`;
