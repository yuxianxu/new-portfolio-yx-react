import { Box } from '@mui/system';
import React from 'react';
import ProjectItem from '../components/ProjectItem.js';
import { ProjectList } from '../utils/ProjectList.js';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <Box className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </Box>
    </div>
  );
}

export default Projects;
