import { Box } from '@mui/system';
import React from 'react';
import PostCard from '../components/PostCard';

function Blog() {
  return (
    <Box
      sx={{
        paddingTop: 15,
      }}
    >
      <Box>
        <Box sx={{ textAlign: 'center', paddingBottom:'44px' }}><h2>My Blogs</h2></Box>
      </Box>
      <Box
        sx={{
          paddingBottom: 15,
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
          margin: '0 auto',
        }}
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Box>
    </Box>
  );
}

export default Blog;
