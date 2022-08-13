import { Typography, Box,Divider,Chip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import Inputs from '../Inputs.json'

function Introduction() {
  return (<>
     {Inputs.about.map(info=>{
            return(
              <>
              <div className="middleContent">
               {/* intro starts */}
               <Typography 
                 className='introHead' 
                 variant='h5'>Introduction 
               </Typography>
               <Box mb={5}>
                 <Typography 
                   variant="Body2" 
                   display="block" gutterBottom 
                   className="introContent">
                   {info.introduction}
                  </Typography>
                  <Typography 
                   variant="subtitle 1" 
                   className="shareContent">
                   Share their profile
                  </Typography>
                  <a href='https://www.linkedin.com/in/kalai-selvi-r-30ba6b244' target="_blank" >
                    <LinkedInIcon className="profileIcon"/>
                  </a>
                  <a href='https://www.naukri.com/mnjuser/homepage' target="_blank" >
                    <img src={info.naukri} />
                  </a>
               </Box>
               <Divider/>

               {/* skills starts */}
               <Box mb={5}>
               <Typography variant='h5' className="skillsHead" mt={3} mb={3}>Skills</Typography>
               {Inputs.Skills.map(skill=>{
                 return(
                    <>
                    <Chip label={skill} variant="outlined" className='chipContent'/>
                    </>
                  )
                })}
                </Box>
                <Divider/>
                {/*Recent project starts  */}
                <Box mb={5}>
                <Typography variant='h5' className="skillsHead" mt={5} mb={3}>Recent Project</Typography>
                {Inputs.recentProjects.map(project=> {
                  return(
                   <div className={project.pic}>
                     <div className={project.layout}>
                        <Typography 
                          variant="h6" mb={2}>
                          {project.location}
                        </Typography>
                        <Typography 
                         variant="h6" mb={2}>
                         {project.dest}
                        </Typography>
                        <Typography 
                         variant="Body 2" mb={3}>
                         {project.skill}
                        </Typography>
                      </div>
                    </div>
                  )
                })}
                </Box>
                <Divider/>
                {/*recent projects ends  */}
                <div className='heading' >Overview</div>
                {Inputs.thoughts.map(thought=>{
                  return(
                    <ul>
                    <li>{thought}</li>
                  </ul>
                  )
                })}
              </div>
              </>
            )
        })}
    </>)
}

export default Introduction