'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'
import { AccordionActions, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { Delete } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1D84B5',
      background: '#3A3042',
      contrastText: 'white',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});
async function handleDelete(cardId) {
  try {
    await fetch(`http://localhost:3001/joboffers/${cardId}`, {
      method: 'DELETE',
    });

    // Aktualisieren Sie die Accordion Cards, um das gelöschte Angebot zu entfernen.
    setAccordionCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  } catch (error) {
    console.error('Error deleting job offer:', error);
  }
}
export default function Homepage() {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [newJobOffer, setNewJobOffer] = React.useState({
    title: '',
    description: '',
    company: '',
    startDate: '',
    payment: '',
    createdBy: '',
  });
  const [accordionCards, setAccordionCards] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [apiRoute, setApiRoute] = React.useState('/joboffers/createdOn/all');
  const router = useRouter();

  function updateApiRoute(newRoute) {
    setApiRoute(newRoute);
  }

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCreateJobOffer = () => {
    // Hier können Sie die Logik implementieren, um das neue Jobangebot zu erstellen
    // Verwenden Sie die Daten in `newJobOffer`

    // Nachdem das Jobangebot erstellt wurde, können Sie das Dialogfenster schließen
    setOpenDialog(false);
  };



  React.useEffect(() => {
    setLoading(true);
    async function fetchAccordionCards() {
      try {
        const response = await fetch(`http://localhost:3001${apiRoute}`);
        const data = await response.json();
        setAccordionCards(data);
      } catch (error) {
        console.error('Error fetching job offers:', error);
      }
      setLoading(false);
    }

    fetchAccordionCards();
  }, [apiRoute]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <main style={{ height: '100%' }}>
        <Box sx={{ pt: 2, bgcolor: 'primary.background', width: '100%', minHeight: '95vh' }}>



          
    <Button
      size="large"
      sx={{ margin: '10px' }}
      variant="contained"
      onClick={handleClickOpenDialog}
    >
      Create New Job Offer
    </Button>

    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Create New Job Offer</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the details for the new job offer:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={newJobOffer.title}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, title: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          value={newJobOffer.description}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, description: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Company"
          fullWidth
          value={newJobOffer.company}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, company: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Start Date"
          fullWidth
          value={newJobOffer.startDate}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, startDate: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Payment"
          fullWidth
          value={newJobOffer.payment}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, payment: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Created by"
          fullWidth
          value={newJobOffer.createdBy}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, createdBy: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Software Version"
          fullWidth
          value={newJobOffer.softwareVersion}
          onChange={(e) => setNewJobOffer({ ...newJobOffer, softwareVersion: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleCreateJobOffer} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>




          <Button size="large"  sx={{ margin: '10px' }} variant="contained" onClick={() => updateApiRoute('/joboffers/company/schnell-und-schwer-logistik')}>
            <Typography>Schnell und Schwer Logistik</Typography>
          </Button>
          <Button size='large' sx={{margin:"10px"}} variant='contained' onClick={() => updateApiRoute('/joboffers/company/pünktlich-lieferdienst')}>
            <Typography >Pünktlich Lieferdienst</Typography>
          </Button>
          <Button size='large' sx={{margin:"10px"}} variant='contained' onClick={() => updateApiRoute('/joboffers/company/heavy-machine-technologies')}>
            <Typography >Heavy Machine Technologies</Typography>
          </Button>
          <Button size='large' sx={{margin:"10px"}} variant='contained' onClick={() => updateApiRoute('/joboffers/payment/all')}>
            <Typography >Filter Payment</Typography>
          </Button>
          <Button size='large' sx={{margin:"10px"}} variant='contained'color='error' onClick={() => updateApiRoute('/joboffers/createdOn/all')}>
            <Typography >Reset Filters</Typography>
          </Button>
          <Grid container spacing={4} sx={{ pt: '50px', width: '100%' }}>
            {accordionCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Accordion sx={{ width: '100%', minHeight:"120px",  '&.Mui-expanded': {minHeight: '350px'} }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography>{card.description}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography>Firma: {card.company}</Typography>
                        <Typography>Start Date: {card.startDate}</Typography>
                        <Typography>Payment: {card.payment}</Typography>
                        <Typography>Created by: {card.createdBy}</Typography>
                        <Typography>Softwareversion: {card.softwareVersion}</Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                  <AccordionActions>
                  <IconButton onClick={() => handleDelete(card.id)} color="error">
                      <Delete />
                    </IconButton>
                  </AccordionActions>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}
