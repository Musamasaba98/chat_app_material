import { AccountBox, Home, ModeNight, Pages, People, Person, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton,
   ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box  flex={1} p={2} 
    sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#pages'>
              <ListItemIcon>
                <Pages />2
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#groups'>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#marketplace'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#friends'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#settings'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch defaultChecked />
            </ListItemButton>
          </ListItem>
       </List>  
      </Box>   
    </Box>
  )
}

export default Sidebar