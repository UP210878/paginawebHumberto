import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About SecurePro
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Mission:</strong> To provide top-tier cybersecurity services that ensure the protection of our clients' digital assets.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Vision:</strong> To become the leading global provider of innovative cybersecurity solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Values:</strong> Integrity, Innovation, Excellence, Customer-Centricity.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Company Description:</strong> SecurePro is dedicated to safeguarding the digital infrastructure of businesses worldwide. Our expert team offers advanced security strategies tailored to meet the unique challenges of each client.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Opening Offer
        </Typography>
        <Typography variant="body1" paragraph>
          Get 25% off on all services for the first six months when you sign up today!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
