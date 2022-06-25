import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { History, NextWeek } from '@mui/icons-material';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              gap: 9,
            }}
          >
            <ListItemButton to="/">Home</ListItemButton>
            <ListItemButton to="/projects">Projects</ListItemButton>
            <ListItemButton to="/experience">Experience</ListItemButton>
          </Box>
        </Toolbar>
      </AppBar>
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
            <List sx={{ paddingRight: 2, display: 'flex', flexDirection: 'column', gap: 4}}>
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
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
