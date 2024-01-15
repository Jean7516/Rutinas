import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

//import HeroBannerImage from '../assets/images/banner.png';
import HeroBannerImage from '../assets/images/banner1.jpg';

const InicioBanner = () => {
return(    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
<Typography color="#0f4571" fontWeight="600" fontSize="26px">Spartan Training Club</Typography>
<Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
Cada entrenamiento  <br />
te acerca más a la mejor  <br />versión de ti mismo.
</Typography>
<Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
  Aprende los mejores ejercicios para tu rutina
</Typography>
<Stack>
  <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0f4571', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explorar Ejercicios</a>
</Stack>
<Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
  Rutinas
</Typography>
<img src={HeroBannerImage} style={{ borderRadius: '10px 10px 15px 200px' }} alt="hero-banner" className="hero-banner-img" />
</Box>)
}

export default InicioBanner