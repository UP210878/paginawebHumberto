import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';

const ZoomCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Añadir una sombra ligera al hover
  },
}));

const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom style={{textAlign: 'center'}}>
          Sobre SecurePro
        </Typography>

        <Box mb={2}> {/* Misión */}
          <ZoomCard>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <SecurityIcon style={{ fontSize: 40, marginRight: '16px' }} />
              <Typography variant="body1">
                <strong>Misión:</strong> Brindar servicios de ciberseguridad de primer nivel que garanticen la protección de los activos digitales de nuestros clientes.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

        <Box mb={2}> {/* Visión */}
          <ZoomCard>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <VisibilityIcon style={{ fontSize: 40, marginRight: '16px' }} />
              <Typography variant="body1">
                <strong>Visión:</strong> Convertirnos en el proveedor global líder de soluciones innovadoras de ciberseguridad.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

        <Box mb={2}> {/* Valores */}
          <ZoomCard>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon style={{ fontSize: 40, marginRight: '16px' }} />
              <Typography variant="body1">
                <strong>Valores:</strong> Integridad, Innovación, Excelencia, Orientación al Cliente.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

        <Box mb={2}> {/* Descripción de la empresa */}
          <ZoomCard>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <InfoIcon style={{ fontSize: 40, marginRight: '16px' }} />
              <Typography variant="body1">
                <strong>Descripción de la Empresa:</strong> SecurePro se dedica a salvaguardar la infraestructura digital de empresas en todo el mundo. Nuestro equipo de expertos ofrece estrategias avanzadas de seguridad adaptadas a los desafíos únicos de cada cliente.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

      </Box>
    </Container>
  );
};

export default Home;
