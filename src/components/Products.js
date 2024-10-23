import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SecurityIcon from '@mui/icons-material/Security';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Products = () => {
  return (
    <Container >
      <Typography variant="h4" gutterBottom my={4} style={{ textAlign: 'center' }}>
        Our Products & Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardContent style={{ textAlign: 'center' }}>
                <GppGoodIcon fontSize="large" style={{ fontSize: 50 }}/>
                <Typography variant="h6" style={{marginTop: '10px'}}>
                  Managed Security Services
                </Typography>
                <Typography variant="body2" style={{marginTop: '20px'}}>
                  Continuous network monitoring, incident response, and vulnerability management.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{marginTop: '20px'}}>
                  Price: $500 MXN/month
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardContent style={{ textAlign: 'center' }}>
                <EngineeringIcon fontSize="large" style={{ fontSize: 50 }}/>
                <Typography variant="h6" style={{marginTop: '10px'}}>
                  Corrective Maintenance
                </Typography>
                <Typography variant="body2" style={{marginTop: '20px'}}>
                  Help recover computer & devices affected by a cyberattack.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{marginTop: '20px'}}>
                  Price: $1000 MXN/hour
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardContent style={{ textAlign: 'center' }}>
              <SecurityIcon fontSize="large" style={{ fontSize: 50 }}/>
                <Typography variant="h6" style={{marginTop: '10px'}}>
                  Security Audits
                </Typography>
                <Typography variant="body2" style={{marginTop: '20px'}}>
                  Comprehensive review of your organization's cybersecurity policies.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{marginTop: '20px'}}>
                  Price: $1200 MXN/audit
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom style={{ marginTop: '60px', textAlign: 'center' }}>
        Payment & Shipping Methods
      </Typography>
      <Typography variant="body1" paragraph>
        We accept payments via credit card, PayPal, and wire transfers. Products are delivered digitally, and no shipping is required. Services depends on how far away the location that needs asistance is.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <CreditCardIcon style={{fontSize: 50}} />
        </Grid>
        <Grid item>
          <AccountBalanceIcon style={{fontSize: 50}} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
