import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { History, NextWeek, StickyNote2 } from '@mui/icons-material';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  window.addEventListener('scroll', function (_e) {
    let header = document.querySelector('.navTitle');
    header.classList.toggle('scrollEffect', window.scrollY > 0);
  });

  return (
    <Box
      sx={{
        display: 'flex',
      }}
      className="header"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', sm: 'center' },
          width: '100%',
        }}
      >
        <IconButton
          color="inherit"
          edge="start"
          sx={{ ml: 1, display: { sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ fontSize: 40, color: '#3e497a' }} />
        </IconButton>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 'auto',
            paddingRight: 'auto',
            color: '#3e497a',
            fontWeight: "500"
          }}
          className="navTitle"
        >
          <ListItemButton sx={{ width: '20%' }}></ListItemButton>
          <ListItemButton to="/">Home</ListItemButton>
          <ListItemButton to="/projects">Projects</ListItemButton>
          <ListItemButton to="/experience">Experience</ListItemButton>
          <ListItemButton to="/blog">Blog</ListItemButton>
        </Box>
      </Box>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            '.& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              // width: drawerWidth,
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              textAlign: 'center',
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              gap: 2,
              paddingTop: 5,
              paddingBottom: 5,
              color: 'white',
              height: '100%',
              backgroundColor: 'black',
              opacity: 0.7,
            }}
          >
            <Divider />
            <List
              sx={{
                paddingRight: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <ListItemButton to="/">
                <HomeIcon sx={{ paddingRight: 2 }} />
                Home
              </ListItemButton>
              <ListItemButton to="/projects">
                <NextWeek sx={{ paddingRight: 2 }} />
                Projects
              </ListItemButton>
              <ListItemButton to="/experience">
                <History sx={{ paddingRight: 2 }} />
                Experience
              </ListItemButton>
              <ListItemButton to="/blog">
                <StickyNote2 sx={{ paddingRight: 2 }} />
                Blog
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
