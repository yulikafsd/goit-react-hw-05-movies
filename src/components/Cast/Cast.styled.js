import styled from 'styled-components';

export const Poster = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  border-radius: 8px;
`;

export const List = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 32px;
  list-style: none;
  margin-top: 16px;
`;

export const Item = styled.li`
  padding: 0;
  margin: 0;
  width: 300px;
  color: #333333;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  text-align: center;
`;

export const Span = styled.span`
  color: #ff6d00;
  font-weight: bold;
`;

export const Message = styled.p`
  text-align: center;
  font-style: italic;
  color: #ff6d00;
`;
