import { Divider, Box, Typography, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import Inputs from '../Inputs.json'


function JobExp() {
  return (
    <div className="section1">
      {Inputs.about.map(info => {
        return (
          <div>
            <br />
            <Divider className="line2" />
            <Box mb={3} mt={3}>
              <Typography
                className="type"
                variant="subtitle1">
                Type of work:
              </Typography>
              <Typography variant="caption">{info.type}</Typography>
            </Box>
            <Divider className="line" />
            <Box mb={3}>
              <br />
              <Typography
                className="type"
                variant="subtitle1">
                Salary expectations:
              </Typography>
              <Typography variant="caption">{info.salary}</Typography>
            </Box>
            <Divider className="line" />
            <Box mb={3}>
              <br />
              <Typography
                className="type"
                variant="subtitle1">
                Languages spoken:
              </Typography>
              <Typography variant="caption">{info.languages}</Typography>
            </Box>
            <Divider className="line" />
            <Box mb={3}>
              <br />
              <Typography
                className="type"
                variant="subtitle1">
                Website:
              </Typography>
              <Typography
                variant="caption">
                <Link className="webLink">{info.website}</Link>
              </Typography>
            </Box>
            <Divider className="line" />
            <Box mb={2}>
              <br />
              <Typography
                className="type"
                variant="subtitle1" mb={2}>
                Linked accounts:
              </Typography>
              <GitHubIcon className="linkedIcon" />
            </Box>
            <Divider className="line2" />
          </div>
        )
      })}
    </div>
  )
}

export default JobExp