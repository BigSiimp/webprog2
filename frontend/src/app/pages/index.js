import React from 'react';
import { Box } from '@mui/system';
import Header from '../../components/Header';
import JobOffers from 'frontend/components/JobOffers.jsx'; // Hier sollte der Pfad korrekt sein

export default function Homepage() {
  return (
    <Box>
      <Header />
      <JobOffers />
    </Box>
  );
}

