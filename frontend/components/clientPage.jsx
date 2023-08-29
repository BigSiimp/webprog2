import React from 'react';
import { Box } from '@mui/system';
import Header from '../../components/Header';
import JobOffers from './JobOffers'; // Hier sollte der Pfad korrekt sein

function ClientPage() {
  return (
    <Box>
      <Header />
      <JobOffers />
    </Box>
  );
}

export default ClientPage;
