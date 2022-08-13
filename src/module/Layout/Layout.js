import { Grid } from '@mui/material'
import React from 'react'
import About from '../About/About'
import Introduction from '../Introduction/Introduction'
import Projects from '../Projects/Projects'

function Layout() {
  return (
    <Grid container >
    <Grid item  xs={12} md={12} lg={3}   sx={{bgcolor:"#030D3D" , color:"white", padding:4}}>
      <About/> 
    </Grid>
    <Grid item xs={12} md={12} lg={6} >
      <Introduction/>
    </Grid>
    <Grid item xs={12} md={12} lg={3} >
      <Projects/>
    </Grid>
    </Grid>
  )
}

export default Layout