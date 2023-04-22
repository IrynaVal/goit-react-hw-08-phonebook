import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Box, Container } from '@mui/material';

export const SharedLayout = () => {
  return (
    <Box>
      <Container>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};
