
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
export default function Home() {
  const [jobOffers, setJobOffers] = React.useState([]);


  useEffect(() => {
    async function fetchJobOffers() {
      const response = await fetch('/api/joboffers'); // Ihre API-Route hier
      const data = await response.json();
      setJobOffers(data);
    }

    fetchJobOffers();
  }, []);

  
  return (
  <Grid container spacing={4}>
      {jobOffers.map(job => (
        <Grid item key={job.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {job.title}
              </Typography>
              <Typography>{job.company}</Typography>
              <Typography>{job.payment}</Typography>
              <Typography>{job.skills}</Typography>
              <Typography>{job.description}</Typography>
              <Typography>{job.startDate}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  
}
