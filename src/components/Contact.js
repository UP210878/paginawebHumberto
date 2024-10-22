import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Office Address:</strong> 123 Cybersecurity Blvd, Tech City, TX 75001
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> +1 (800) 123-4567
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Cell:</strong> +1 (800) 987-6543
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> contact@securepro.com
        </Typography>

        <Typography variant="h5" gutterBottom>
          Follow Us on Social Media
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Link href="https://www.facebook.com/securepro" target="_blank" rel="noopener noreferrer">Facebook</Link>
          </Grid>
          <Grid item>
            <Link href="https://www.twitter.com/securepro" target="_blank" rel="noopener noreferrer">Twitter</Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com/securepro" target="_blank" rel="noopener noreferrer">Instagram</Link>
          </Grid>
          <Grid item>
            <Link href="https://wa.me/18009876543" target="_blank" rel="noopener noreferrer">WhatsApp</Link>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
          Find Us on the Map
        </Typography>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.60400322513!2d-102.27414713170108!3d21.849510998896974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ed0075e4bc2f%3A0xd04ad43c6c107e3b!2sPlaza%20misiones!5e0!3m2!1ses-419!2smx!4v1729615726312!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='SecurePro Location'></iframe>
      </Box>
    </Container>
  );
};

export default Contact;
