import React from 'react'
import { Avatar, Box, Divider, Switch, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Inputs from '../Inputs.json'

function MyInfo() {
  const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
   ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#D40000',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <div className="section1">
        {Inputs.about.map(info=>{
            return(
                <div className='part1'>
                <Box className="leftPart">    
                <Avatar className="picture" alt="Remy Sharp" src={info.picture} sx={{width: 150, height: 150}}/>
                <Typography variant="h5">{info.name}</Typography>
                <Typography variant="caption">
                 {info.address}
                 <br/>
                 {info.designation}
                </Typography>
                <Box className="icons">
                <GitHubIcon className="shareIcons"/>
                <a href= 'https://www.linkedin.com/in/kalai-selvi-r-30ba6b244' target="_blank"><LinkedInIcon className="shareIcons"/></a>
                </Box>
                </Box>
                <Divider className="line"/>
                <br/>
                <Box className="switchPart" mb={3}>
                <Typography 
                className="switchContent" 
                variant="subtitle1">
                Available for hire:
                </Typography>
                <IOSSwitch className="switch" defaultChecked />
                </Box>
                </div>
            )
        })}
    </div>
  )
}

export default MyInfo