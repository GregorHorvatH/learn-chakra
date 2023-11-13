import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

export const RootLayout = () => (
  <Grid templateColumns={'repeat(6, 1fr)'}>
    <GridItem
      as="aside"
      colSpan={{
        base: 6,
        lg: 2,
        xl: 1,
      }}
      bg="brand.600"
      minHeight={{ lg: '100vh' }}
      p="20px"
    >
      <Sidebar />
    </GridItem>
    <GridItem
      as="main"
      colSpan={{
        base: 6,
        lg: 4,
        xl: 5,
      }}
      p="20px"
    >
      <Navbar />
      <Outlet />
    </GridItem>
  </Grid>
);
