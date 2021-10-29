import React from 'react';
import {Box} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

import { StyledContainer, StyledContent } from './styles';

function App() {
  
  return (
    <StyledContainer>
      <Box id='header'>
        <NavBar />
      </Box>
      <StyledContent>
        <Box id='content'>
          <Main />
        </Box>
        <Box id='footer'>
          <Footer />
        </Box>
      </StyledContent>

    </StyledContainer>
  );
}

export default App;
