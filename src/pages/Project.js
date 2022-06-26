import { Image } from 'mui-image';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../utils/ProjectList';

function Project() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <Box className="project">
      <h1>{project.name}</h1>
      <Image src={project.image} alt={project.name} width={500}  />
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
    </Box>
  );
}

export default Project;
