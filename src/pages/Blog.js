import { Box } from '@mui/system';
import React from 'react';
import BlogPost from '../components/BlogPost';

function Blog() {
  return (
    <Box sx={{ height: '60vh', paddingTop: 10 }}>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </Box>
  );
}

export default Blog;
