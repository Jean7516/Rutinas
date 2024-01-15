import React from 'react'
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '130px', height: '70px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"

      fontFamily="Alegreya"
      fontSize="28px"
      alignItems="flex-start"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Ejercicios</a>
    </Stack>
  </Stack>
  )
}

export default Navbar