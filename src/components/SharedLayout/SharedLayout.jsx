import { Outlet } from 'react-router-dom';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from 'components/Header/Header';
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
