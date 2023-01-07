import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Menu, StyledLink } from './SharedLayout.styled';
import { Loader } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Menu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Menu>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
