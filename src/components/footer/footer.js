// import React from 'react';
import * as React from 'react';
import  Button from '@mui/material/Button';
import Toolbar from  '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
function Footer() {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">&copy; mohammad ALshraideh 2022</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Footer;