import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  padding-bottom: 32px;
  line-height: 1;
  text-align: center;
  color: #333333;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  scale: 1;
  transition: all 200ms linear;
  color: #fff;
  text-shadow: none;
  transition: all 200ms linear;

  &:hover {
    text-shadow: 0 0 10px #ff6d00, 0 0 30px #ff6d00;
    scale: 1.1;
  }
`;

export const Poster = styled.img`
  display: block;
  border-radius: 5px;
`;

export const Title = styled.h2`
  position: absolute;
  top: 0;
  display: flex;
  width: 180px;
  min-height: 44px;
  margin: 0;
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-shadow: inherit;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.8) 0%,
    rgba(46, 46, 46, 0.8) 25%,
    rgba(198, 198, 198, 0.8) 100%
  );
  text-align: center;
  font-size: 18px;
  line-height: 1.2;
  /* transition: all 200ms linear;

  &:hover {
    text-shadow: 0 0 10px #ff6d00, 0 0 30px #ff6d00;
  } */
`;
