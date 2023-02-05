import { useState } from 'react';
import { useRouter } from 'next/router'
import {
  AppBar, Box, Button, Container, IconButton,
  Menu, MenuItem, Typography, Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LaptopIcon from '@mui/icons-material/Laptop';
import CodeIcon from '@mui/icons-material/Code';

const pageItems = [
  {
    name: 'Chat GPT',
    href: '/chat'
  },
  {
    name: 'Rick & Morty search',
    href: '/rickmorty'
  }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (href: string) => {
    handleCloseNavMenu();
    router.push(href);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LaptopIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            /nledesma
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pageItems.map((page) => (
                <MenuItem key={page.name} onClick={() => handleMenuClick(page.href)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LaptopIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            /nledesma
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pageItems.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleMenuClick(page.href)}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: (router.pathname == page.href) ? 700 : 400 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;