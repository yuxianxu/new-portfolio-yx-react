import { Box } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <Box sx={{ paddingTop: 15, paddingBottom: {xs: 5}, paddingLeft: {xs:4, }, paddingRight: {xs:3} }}>
      <VerticalTimeline lineColor="#26c6da">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#26c6da', color: '#fff' }}
          icon={<WorkIcon />}
          date="Mar, 2022 - present"
        >
          <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
          <p>Grouppers Inc</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#26c6da', color: '#fff' }}
          icon={<WorkIcon />}
          date="2021-2022"
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <p>Freelance</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#009688', color: '#fff' }}
          icon={<SchoolIcon />}
          date="2021-2022"
        >
          <h3 className="vertical-timeline-element-title">Web Development</h3>
          <p>BrainStation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#009688', color: '#fff' }}
          icon={<SchoolIcon />}
          date="2021-2022"
        >
          <h3 className="vertical-timeline-element-title">My high School</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#009688', color: '#fff' }}
          icon={<SchoolIcon />}
          date="2021-2022"
        >
          <h3 className="vertical-timeline-element-title">My high School</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </Box>
  );
}

export default Experience;
