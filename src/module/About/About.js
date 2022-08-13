import React from 'react'
import JobExp from './JobExp'
import MyInfo from './MyInfo'
import {Box} from '@mui/material'

function About() {
  return (
    <div>
        <MyInfo/>
        <Box className='jobExp'> 
        <JobExp/>
        </Box>
    </div>
  )
}

export default About