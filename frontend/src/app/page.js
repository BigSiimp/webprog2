'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6C4B95',
      background: '#1E1E24',
      contrastText: 'white',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});



export default function DetailPage() {
  const [jobOffers, setJobOffers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    async function fetchJobOffers() {
      try {
        const response = await fetch('http://localhost:3001/joboffers'); // Update API endpoint
        const data = await response.json();
        setJobOffers(data);
      } catch (error) {
        console.error('Error fetching job offers:', error);
      }
      setLoading(false);
    }

    fetchJobOffers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header/>
      <main style={{ height: '100%' }}>
        <Box sx={{ pt: 2, bgcolor: 'primary.background', width: '100%' }}>
          <Box sx={{ width: '100%' }}>
          <Typography
              component="h1"
              variant="h3"
              align="center"
              color="primary.contrastText"
              gutterBottom
            >
              {jobOffers.length > 0 ? jobOffers[0].title : 'No Title'}
            </Typography>
            <Typography variant="h5" align="center" color="primary.contrastText" paragraph>
            {jobOffers.length > 0 ? jobOffers[0].description : 'No Description'}
            </Typography>

            <Grid container spacing={3} sx={{ width: '100%' }}>
              {jobOffers.map((gamemode) => (
                <Grid item key={gamemode.id} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {jobOffers.title}
                      </Typography>
                      <Typography>{jobOffers.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
}