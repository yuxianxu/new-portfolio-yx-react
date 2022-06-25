import { FacebookRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Link } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: 4 }}
      >
        <Link href="https://linkedin.com/in/yuxianxu">
          <LinkedIn color="action" sx={{ fontSize: 30 }} />
        </Link>
        <Link href="https://github.com/yuxianxu">
          <GitHub color="action" sx={{ fontSize: 30 }} />
        </Link>
        <Link href="https://facebook.com">
          <FacebookRounded color="action" sx={{ fontSize: 30 }} />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
