import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const EjerciciosSimilares = ({ targetMuscleExercises, equipmentExercises }) => {
  if (!targetMuscleExercises.length) return <Loader />;
  return(
  <Box sx={{ mt: { lg: '10px', xs: '0px' } }}>
  <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
    Ejercicios <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Para el mismo musculo</span> recomendados
  </Typography>
  <Stack  direction="row" sx={{ gap: { lg: '17px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
  </Stack>
  <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
    Ejercicios que utilizan el  <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>mismo equipamiento</span> 
  </Typography>
  <Stack  direction="row" sx={{ gap: { lg: '17px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
  </Stack>
  </Box>)
};

export default EjerciciosSimilares;
