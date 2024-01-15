import React from 'react'

import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#7FB3D5">
    <Stack gap="100px" sx={{ alignItems: 'center' }} flexWrap="wrap" >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '150px' }} />
    </Stack>
   
  </Box>
);


export default Footer