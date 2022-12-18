import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box bgcolor="lightgreen" flex={1} p={2} 
    sx={{display:{xs:"none",sm:"block"}}}>Feed</Box>
  )
}

export default Sidebar