import React from 'react'
import Inputs from '../Inputs.json'
import {Box, Typography, Card } from '@mui/material'
import JobExp from '../About/JobExp'

function Projects() {
  return (
    <>
    <div className="Tools">
      {/* tools/framework starts part 1 */}
      <Typography className="righthead">Tools/Frameworks</Typography>
      <div className='flexContainer'>
        {Inputs.tools.map(tool=>{
          return(
            <>
            <div className='toolCard' >
              <img className='toolImg' src={tool.src} />
              <div className='toolName'>{tool.course}</div>
            </div>
            </>
          )
        })}
      </div>
      {/* languages */}
      <Typography className="righthead">Languages</Typography>
      <div className='flexContainer'>
       {Inputs.languages.map(language=>{
         return(
            <Box className="toolCard">
             <img className="toolImg" src={language.pic} alt="javaimage"/>
             <Typography className="toolName">{language.course}</Typography>
            </Box>
          )
        })}
      </div>
      {/* Education / Training */}
      <Typography className="righthead">Education</Typography>
      {Inputs.about.map(info=>{
        return(
         <Card variant="outlined" className="trainingCard" sx={{padding:2}}>
         <img className="toolImg" src={info.collage} alt="vueimage"/>
         <Typography className="toolName">{info.university}</Typography>
         <Typography className="toolName">{info.stream}<br/>{info.year}</Typography>
         </Card>
        )
      })}
    </div>
    <Box className="forTabView" sx={{bgcolor:"#030D3D", color:"white", padding:4}} >
    <JobExp/>
    </Box>
    </>
  )
}

export default Projects