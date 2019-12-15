import React from 'react';
import { Card } from '@material-ui/core';

export default function Job({ job }) {
  return (
    <Card className="job">
      <div>{job.title}</div>
      <div>{job.company}</div>
    </Card>
  );
}
