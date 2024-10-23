import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import Home from './components/Home';
import Products from './components/Products'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <Router>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SecurePro
          </Typography>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/products">Productos y Servicios</Button>
          <Button color="inherit" component={Link} to="/contact">Contacto</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      </ThemeProvider>
  );
}

export default App;
