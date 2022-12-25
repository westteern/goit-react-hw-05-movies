import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
