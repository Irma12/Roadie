import React from 'react';
import {
  GaugeCard
} from '@backstage/core';
import { Box, Typography } from '@material-ui/core';

export const ProjectDetailsCard = ({ issues }) => {
  const filterResult = issues.filter(i => {
    return i.resolved === false;
  });

  const percentage = filterResult.length / issues.length 
    return (
    <Box display="flex">
    <Box ml={2} display="flex" justifyContent="center" flexDirection="column">
     <Typography>All issues number</Typography>
     <Typography variant="h1">{issues.length}</Typography>
    </Box>
    <Box ml={2}/>
    <GaugeCard title="Unresolved items" progress={percentage} />
    </Box>
    );
  };
