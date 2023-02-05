
import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{
          height: "85vh"
        }}>
          {children}
        </Box>
      </Container>
    </>
  )
}



export default Layout;