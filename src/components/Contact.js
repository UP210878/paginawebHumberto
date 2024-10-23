import React from 'react';
import { Container, Typography, Grid, Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, Twitter, WhatsApp } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Contactanos
        </Typography>
        
        {/* Main Grid container to align sections horizontally */}
        <Grid container spacing={4}>
          {/* Contact info and social media section */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              <strong>Dirección de Nuestras Oficinas:</strong> 
              <br/> Av. San Margarito Flores García 1452, Misión de Sta Lucía, 20298 Aguascalientes, Ags. 
              <br/> <strong>Planta Baja Local 40M2 </strong>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Teléfono:</strong> +49 (800) 123-4567
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Celular:</strong> +49 (800) 987-6543
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> contact@securepro.com
            </Typography>

            <Typography variant="h4" gutterBottom>
              Siguenos en nuestras redes sociales
            </Typography>
            <Grid container direction="column" spacing={2}>
              <Grid item container alignItems="center">
                <FacebookIcon style={{ marginRight: '8px' }} />
                <Link href="https://www.facebook.com/securepro" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </Grid>
              <Grid item container alignItems="center">
                <Twitter style={{ marginRight: '8px' }} />
                <Link href="https://www.twitter.com/securepro" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Link>
              </Grid>
              <Grid item container alignItems="center">
                <Instagram style={{ marginRight: '8px' }} />
                <Link href="https://www.instagram.com/securepro" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </Grid>
              <Grid item container alignItems="center">
                <WhatsApp style={{ marginRight: '8px' }} />
                <Link href="https://wa.me/18009876543" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Map section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Nuestra Dirección en el Mapa
            </Typography>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.60400322513!2d-102.27414713170108!3d21.849510998896974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ed0075e4bc2f%3A0xd04ad43c6c107e3b!2sPlaza%20misiones!5e0!3m2!1ses-419!2smx!4v1729615726312!5m2!1ses-419!2smx" 
              width="100%" 
              height="450" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title='SecurePro Location'
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
