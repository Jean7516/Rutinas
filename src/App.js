import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './assets/App.css';
import Ejercicios from './pages/Ejercicios';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

document.title='Rutinas Gym'
const App = () => (

  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<Ejercicios />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
