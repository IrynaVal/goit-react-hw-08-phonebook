import { Outlet } from 'react-router-dom';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    // <Layout>
    <main>
      <Header />
      {/* <Navigation />
        <UserMenu /> */}
      {/* <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        > */}

      <Outlet />
      {/* </Suspense> */}
    </main>
    // </Layout>
  );
};
