'use client'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Box>

   
    <AppBar sx={{bgcolor:"#cfcfcf", display:"flex", alignItems:"center", position:"relative"}}>
        <Toolbar>
            <Typography variant="h5" color="info.main" >
                PERMANGEL
            </Typography>
        </Toolbar>
    </AppBar>
    </Box>
  )
}
