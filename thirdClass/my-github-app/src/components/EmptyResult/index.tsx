import React from 'react';
import { Box, Typography } from '@material-ui/core';
import empty from '../../assets/empty.gif';


const EmptyResult = () => {

  return (
    <Box>
      <img src={empty} />
      <Typography variant="body1">Adicione um texto!</Typography>
    </Box>
  
  )
}

export default EmptyResult;