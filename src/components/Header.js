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
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {
  const { window } = props;
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
              height: '100%',
            }}
          >
            <Divider />
            <List>
              <ListItemButton to="/">Home</ListItemButton>
              <ListItemButton to="/projects">Projects</ListItemButton>
              <ListItemButton to="/experience">Experience</ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
