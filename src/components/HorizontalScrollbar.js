import React from 'react';
import { Box, Grid } from '@mui/material';
import EjerciciosCard from './EjerciciosCard';
import BodyPart from './BodyPart';


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  
  return(
  <Grid container spacing={{ xs:0, md: 0 }}  >

    {data.map((item) => (
     
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 20px 20px 20px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <EjerciciosCard exercise={item} /> }
      </Box>
    ))}
    
  </Grid>)
};

export default HorizontalScrollbar;
