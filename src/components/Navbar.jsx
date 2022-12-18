// import styled from '@emotion/styled'
import { Mail, Notifications } from '@mui/icons-material';
import SpaIcon from '@mui/icons-material/Spa';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
   }) 


const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
   }))

const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
   }))   
const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
   }))   

const Navbar=()=> { 
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
       <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Minurse</Typography>
        <SpaIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'></InputBase></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
            <Mail />
        </Badge>
        <Badge badgeContent={4} color="error">
            <Notifications />
        </Badge> 
        <Avatar sx={{width:30,height:30}}
            src='https://media.istockphoto.com/id/1226886130/photo/3d-illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-cartoon-businessman.jpg?b=1&s=612x612&w=0&k=20&c=3l2mvXVqrSiU3593B897Yk-WYtpZ3xJhnmqI22dVhYQ='
            onClick={e=>setOpen(true)}
            />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width:30,height:30}}
            src='https://media.istockphoto.com/id/1226886130/photo/3d-illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-cartoon-businessman.jpg?b=1&s=612x612&w=0&k=20&c=3l2mvXVqrSiU3593B897Yk-WYtpZ3xJhnmqI22dVhYQ='
            
            />  
        <Typography variant="span">Musa</Typography>
        </UserBox>
        </StyledToolbar> 
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        open={open}
        onClose={e=>setOpen(false)}
        TransitionOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar