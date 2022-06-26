import { GitHub, LinkedIn } from '@mui/icons-material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { Box } from '@mui/material';
import React from 'react';

function Hero() {
  return (
    <Box className='hero'>
      <Box className="about" sx={{ width: '100%', backgroundColor: '#26c6da' }}>
        <h4>Hi, I'm Yuxian Xu</h4>
        <h2>A front-end software developer</h2>
        <Box className="prompt">
          <p>
            I like building web applications, learning new stacks, and solving
            problems.
          </p>
          <LinkedIn />
          <MarkunreadIcon />
          <GitHub />
        </Box>
      </Box>

      <Box className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </Box>
    </Box>
  );
}

export default Hero;
