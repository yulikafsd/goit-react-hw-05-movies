import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Menu, StyledLink } from './SharedLayout.styled';
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
