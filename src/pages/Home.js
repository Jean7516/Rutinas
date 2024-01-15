import React, { useState } from "react";
import { Box } from "@mui/material";
import EjerciciosCom from "../components/EjerciciosCom";
import BuscarEjercicios from "../components/BuscarEjercicios";
import InicioBanner from "../components/InicioBanner";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <InicioBanner />
      <BuscarEjercicios
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <EjerciciosCom
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
