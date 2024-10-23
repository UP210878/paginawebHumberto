import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Products = () => {
  return (
    <Container >
      <Typography variant="h4" gutterBottom my={4}>
        Our Products & Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Managed Security Services
              </Typography>
              <Typography variant="body2">
                Continuous network monitoring, incident response, and vulnerability management.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Price: $500 MXN/month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Corrective Maintenance
              </Typography>
              <Typography variant="body2">
                Help recover computer & devices affected by a cyberattack.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Price: $1000 MXN/hour
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Security Audits
              </Typography>
              <Typography variant="body2">
                Comprehensive review of your organization's cybersecurity policies.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Price: $1200 MXN/audit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Payment & Shipping Methods
      </Typography>
      <Typography variant="body1" paragraph>
        We accept payments via credit card, PayPal, and wire transfers. Products are delivered digitally, and no shipping is required. Services depends on how far away the location that needs asistance is.
      </Typography>
    </Container>
  );
};

export default Products;
