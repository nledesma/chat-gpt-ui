
import { Theme } from '@emotion/react';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode, useState } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children: ReactNode
}


const themes: {[key: string]: Theme }  = {
  light: createTheme(),
  dark: createTheme({ palette: { mode: 'dark' }}) 
};

const Layout = ({ children }: LayoutProps) => {
  const [themeMode, setThemeMode] = useState('light')

  const switchTheme = () => {
    themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
  }

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <CssBaseline />
      <Navbar themeSwitcher={switchTheme} themeMode={themeMode} />
      <Box sx={{
        bgcolor: 'background.paper',
      }}>
        <Container maxWidth="lg" sx={{ bgcolor: 'background.paper'}}>
          <Box sx={{
            height: "85vh",
            bgcolor: 'background.paper',
          }}>
            {children}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}



export default Layout;
