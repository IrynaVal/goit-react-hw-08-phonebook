import { Outlet } from 'react-router-dom';
import { Header } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    // <Layout>
    <main>
      <Header />
      <Suspense
        fallback={
          null
          // <p>Loading...</p>
        }
      >
        <Outlet />
      </Suspense>
    </main>
    // </Layout>
  );
};
