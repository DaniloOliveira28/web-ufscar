import React from 'react';
import { Box, Typography } from '@material-ui/core';
import empty from '../../assets/empty.gif';


const EmptyResult = () => {

  return (
    <Box>
      <Typography variant="body1">Aguardando um texto de busca!</Typography>
      <img src={empty} />
    </Box>
  
  )
}

export default EmptyResult;