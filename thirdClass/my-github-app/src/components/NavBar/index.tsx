import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ElevationScroll from '../ElevationScroll';

interface NavBarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const NavBar = (props:NavBarProps) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Our TERRIFIC github app</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  )
}

export default NavBar;