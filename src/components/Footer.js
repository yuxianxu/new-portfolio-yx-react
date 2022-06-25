import { FacebookRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Link } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'black', opacity: '0.7' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          paddingTop: 4,
          paddingBottom: 2,
        }}
      >
        <Link href="https://linkedin.com/in/yuxianxu">
          <LinkedIn sx={{ fontSize: 30 }} />
        </Link>
        <Link href="https://github.com/yuxianxu">
          <GitHub sx={{ fontSize: 30 }} />
        </Link>
        <Link href="https://facebook.com">
          <FacebookRounded sx={{ fontSize: 30 }} />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 1,
          color: 'white',
          paddingBottom: 2,
        }}
      >
        &copy; 2022 &nbsp; <Link href="https://yuxianxu.com">Yuxian Xu</Link>
      </Box>
    </Box>
  );
}

export default Footer;
