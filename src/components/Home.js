import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const ZoomCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));



const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About SecurePro
        </Typography>

        <Box mb={2}> {/* Add margin bottom for spacing */}
          <ZoomCard>
            <CardContent>
              <Typography variant="body1">
                <strong>Mission:</strong> To provide top-tier cybersecurity services that ensure the protection of our clients' digital assets.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

        <Box mb={2}> {/* Add margin bottom for spacing */}
          <ZoomCard>
            <CardContent>
              <Typography variant="body1">
                <strong>Vision:</strong> To become the leading global provider of innovative cybersecurity solutions.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

        <Box mb={2}> {/* Add margin bottom for spacing */}
          <ZoomCard>
            <CardContent>
              <Typography variant="body1">
                <strong>Values:</strong> Integrity, Innovation, Excellence, Customer-Centricity.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

        <Box mb={2}> {/* Add margin bottom for spacing */}
          <ZoomCard>
            <CardContent>
              <Typography variant="body1">
                <strong>Company Description:</strong> SecurePro is dedicated to safeguarding the digital infrastructure of businesses worldwide. Our expert team offers advanced security strategies tailored to meet the unique challenges of each client.
              </Typography>
            </CardContent>
          </ZoomCard>
        </Box>

      </Box>
    </Container>
  );
};

export default Home;
