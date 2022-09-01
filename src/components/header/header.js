  import React from 'react';
  import Toolbar from  '@mui/material/Toolbar';
  import AppBar from '@mui/material/AppBar';
function Header() {
    const style={
        
        fontSize: 'xxx-large',
        fontFamily: 'monospace',
        color: '#fff',
        height:'60px',
            
      };
    return (
        <>
        <AppBar style={style} position="static">
            <Toolbar>
               <h3>Our Store</h3>
            </Toolbar>

        </AppBar>
        </>
    )
}

export default Header;