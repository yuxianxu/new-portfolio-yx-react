import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <Box
      className="projectItem"
      onClick={() => {
        navigate('/project/' + id);
      }}
    >
      <Box sx={{ backgroundImage: `url(${image})` }} className="bgImage"></Box>
      <h1>{name}</h1>
    </Box>
  );
}

export default ProjectItem;
