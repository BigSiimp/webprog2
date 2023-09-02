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

import { useRouter } from 'next/navigation';
import Header from './Header';

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



export default function JobOffers() {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
 const router = useRouter()
function handleClick(cardId) {
    router.push({
      pathname: `/jobPage/${cardId}`
    })
}

  React.useEffect(() => {
    setLoading(true);
    async function fetchCards() {
      try {
        const response = await fetch('http://localhost:3001/joboffers/createdOn/all'); // Update API endpoint
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching job offers:', error);
      }
      setLoading(false);
    }

    fetchCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Header />
    <main style={{ height: '100%' }}>
      <Box sx={{ pt: 2, bgcolor: 'primary.background', width: '100%' }}>
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <CardMedia component="div" />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2"> {card.title} </Typography>
                  <Typography>{card.description}</Typography>
                  <Typography sx={{pt:"15px"}}>Firma: {card.company}</Typography>
                  <Typography>Start Date: {card.startDate}</Typography>

                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleClick(card.id)}>View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  </ThemeProvider>
);
}