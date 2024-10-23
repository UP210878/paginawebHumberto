import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea, Divider, Box } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GradingIcon from '@mui/icons-material/Grading';

const Products = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom my={4} style={{ textAlign: 'center' }}>
        Nuestros Productos y Servicios
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardContent style={{ textAlign: 'center' }}>
                <GppGoodIcon fontSize="large" style={{ fontSize: 50 }} />
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>
                  Servicios de Seguridad Gestionados
                </Typography>
                <Typography variant="body2" style={{ marginTop: '20px' }}>
                  Monitoreo continuo de la red, respuesta a incidentes y gestión de vulnerabilidades.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
                  Precio: $500 MXN/mes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardContent style={{ textAlign: 'center' }}>
                <EngineeringIcon fontSize="large" style={{ fontSize: 50 }} />
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>
                  Mantenimiento Correctivo
                </Typography>
                <Typography variant="body2" style={{ marginTop: '20px' }}>
                  Ayuda a recuperar computadoras y dispositivos afectados por un ciberataque.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
                  Precio: $1000 MXN/hora
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardContent style={{ textAlign: 'center' }}>
                <GradingIcon fontSize="large" style={{ fontSize: 50 }} />
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>
                  Auditorías de Seguridad
                </Typography>
                <Typography variant="body2" style={{ marginTop: '20px' }}>
                  Revisión comprensiva y exhaustiva sobre las políticas actuales de seguridad de la compañía.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
                  Precio: $1200 MXN/auditoría
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom style={{ marginTop: '60px', textAlign: 'center' }}>
        Métodos de Pago y Envío
      </Typography>
      <Typography variant="body1" paragraph>
        Aceptamos pagos con tarjeta de crédito, PayPal y transferencias bancarias. 
        <br/> Los productos se entregan de forma digital, por lo que no se requiere envío. 
        <br/> El tiempo de respuesta de los servicios dependerá de la localización física donde se necesiten.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <CreditCardIcon style={{ fontSize: 50 }} />
            <Box
              component="img"
              sx={{
                height: 200,
                width: 'auto',
                marginTop: 1,
              }}
              alt="Visa & Mastercard logo."
              src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l1600.jpg"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <AccountBalanceIcon style={{ fontSize: 50 }} />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 200,
                marginTop: 0,
              }}
              alt="Logo Banorte."
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_de_Banorte.svg"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 200,
                marginTop: -3,
              }}
              alt="Logo Santander."
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Banco_Santander_Logotipo.svg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
