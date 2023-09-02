'use client'
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import Header from '../../../components/Header';
import { useRouter } from 'next/navigation';
const initialValues = {
  title: '',
  description: '',
  company: '',
  payment: '',
  skills: '',
  startDate: '',
  createdBy: '',
  softwareVersion: '',
  createdOn: '', 
};

export default function JobOfferForm() {
  const [formData, setFormData] = useState(initialValues);
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

    const dataToSend = {
      company: formData.company,
      title: formData.title,
      description: formData.description,
      payment: formData.payment,
      skills: formData.skills,
      startDate: formData.startDate,
      createdBy: formData.createdBy,
      softwareVersion: formData.softwareVersion,
      createdOn: parseInt(currentDate),
    };

    try {
      console.log(dataToSend)
      console.log(formData)
      formData.createdOn = parseInt(currentDate);

      await axios.post('http://localhost:3001/joboffers', dataToSend);
      // Erfolgreiche Übertragung
      console.log('Daten erfolgreich übertragen.');
      // Hier könntest du zur Bestätigungsseite oder zur Anzeige der erstellten Angebote weiterleiten.
      router.push('/');
    } catch (error) {
      // Fehlerbehandlung
      console.error('Fehler beim Übertragen der Daten: ', error);
    }
  };

  return (
    <Box>
     
          <Box>
        <Header />
      </Box>

    <Container maxWidth="sm">

      <Typography sx={{p:"40px"}} variant="h5" align="center" gutterBottom>
        Jobangebot erstellen
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{bgcolor:"#ffffff"}}
          fullWidth
          label="Titel"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          sx={{bgcolor:"#ffffff"}}
          label="Beschreibung"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          margin="normal"
        />
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="company" >Firma auswählen</InputLabel>
            <Select
            sx={{bgcolor:"#ffffff"}}
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            >
              <MenuItem value="pünktlich-lieferdienst">pünktlich-lieferdienst</MenuItem>
              <MenuItem value="heavy-machine-technologies">heavy-machine-technologies</MenuItem>
              <MenuItem value="schnell-und-schwer-logistik">schnell-und-schwer-logistik</MenuItem>
            </Select>
          </FormControl>
        <TextField
          fullWidth
          sx={{bgcolor:"#ffffff"}}
          label="Zahlung"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          sx={{bgcolor:"#ffffff"}}
          label="Fähigkeiten"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          sx={{bgcolor:"#ffffff"}}
          label="Startdatum"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          sx={{bgcolor:"#ffffff"}}
          label="Erstellt von"
          name="createdBy"
          value={formData.createdBy}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          sx={{bgcolor:"#ffffff"}}
          label="Softwareversion"
          name="softwareVersion"
          value={formData.softwareVersion}
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Angebot erstellen
        </Button>
      </form>
    </Container>
    </Box>
  );
}
