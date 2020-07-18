import React from 'react';
import {Box} from '@material-ui/core';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Footer from '../components/Footer';

function App() {
  
  return (
    <Box>
      <Box id='header'>
        <NavBar />
      </Box>
      <Box id='content'>
        <Main />
      </Box>
      <Box id='footer'>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
