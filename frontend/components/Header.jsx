'use client'
import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Box>

   
    <AppBar sx={{bgcolor:"#cfcfcf", display:"flex", alignItems:"center", position:"sticky", height:"5vh"}}>
        <Toolbar>
            <Typography variant="h5" color="#1D84B5" >
                PERMANGEL
            </Typography>
        </Toolbar>
    </AppBar>
    </Box>
  )
}
