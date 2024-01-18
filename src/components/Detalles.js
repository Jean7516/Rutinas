import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';




const Detalles = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment,instructions } = exerciseDetail;

   
    console.log(JSON.stringify(instructions))

    const extraDetail = [
      {
        icon: BodyPartImage,
        name: bodyPart,
       
      },
      {
        icon: TargetImage,
        name: target,
      },
      {
        icon: EquipmentImage,
        name: equipment,
      },
    ];

  

    return (
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {name}
          </Typography>
          <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }}fontWeight={700} textTransform="capitalize" color="#4F4C4C">
           Instrucciones: {' '}
            
          </Typography>
          {instructions?.map((i) => (
             <Stack key={i} direction="row" gap="24px" alignItems="center">
              <Typography textTransform="capitalize" sx={{ fontSize: { lg: '20px', xs: '20px' } }}>
                {i}
              </Typography>
            </Stack>
          ))}

          {extraDetail?.map((id) => (
            <Stack key={id.icon} direction="row" gap="24px" alignItems="center">
              <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                <img src={id.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
              </Button>
              <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                {id.name}
              </Typography>
            </Stack>
          ))}
         
        </Stack>
      </Stack>
    );
}

export default Detalles