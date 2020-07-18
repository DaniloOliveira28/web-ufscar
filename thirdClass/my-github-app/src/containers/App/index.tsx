import React from 'react';
import {Box} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

import { StyledBox } from './styles';

function App() {
  
  return (
    <StyledBox>
      <Box id='header'>
        <NavBar />
      </Box>
      <Box id='content'>
        <Main />
      </Box>
      <Box id='footer'>
        <Footer />
      </Box>
    </StyledBox>
  );
}

export default App;
