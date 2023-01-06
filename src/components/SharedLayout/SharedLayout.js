import { Outlet } from 'react-router-dom';
import { Container, Header, Menu, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Menu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Menu>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
