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
  gap: 32px;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
`;

export const Poster = styled.img`
  display: block;
  border-radius: 5px;
`;

export const Title = styled.h2`
  position: absolute;
  top: 0;
  display: flex;
  width: 280px;
  min-height: 44px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.6) 0%,
    rgba(46, 46, 46, 0.6) 25%,
    rgba(198, 198, 198, 0.6) 100%
  );
  text-align: center;
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
`;
