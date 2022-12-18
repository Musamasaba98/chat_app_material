import { Box, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor="pink" flex={2} p={2}
     sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
        <Typography>Online Friends</Typography>
      </Box>
     </Box>
  )
}

export default Rightbar