import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [jobOffer, setJobOffer] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    // Hier sollten Sie die Logik implementieren, um die Jobangebotsdetails basierend auf id abzurufen.
    // Sie können z.B. eine API-Anfrage durchführen, um die Details abzurufen.

    // Beispiel-API-Anfrage (ersetzen Sie dies durch Ihre eigene Implementierung):
    fetch(`http://localhost:3001/joboffers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJobOffer(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching job offer details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobOffer) {
    return <div>Job offer not found.</div>;
  }

  return (
    <div>
      <h1>Job Offer Details</h1>
      <Typography variant="h5">{jobOffer.title}</Typography>
      <Typography>{jobOffer.description}</Typography>
      <Typography>Firma: {jobOffer.company}</Typography>
      <Typography>Start Date: {jobOffer.startDate}</Typography>
      {/* Hier können Sie weitere Informationen zur Jobangebotsdetails anzeigen */}
    </div>
  );
};

export default DetailPage;
