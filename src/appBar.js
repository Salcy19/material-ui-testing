import React from 'react';
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import KeyboardIcon from '@material-ui/icons/Keyboard'
import './App.css';
          
export default function AppBarTypeTest() {
    return (
          <AppBar>
            <Toolbar>
              <IconButton disabled>
                <KeyboardIcon/>
              </IconButton>
              <Typography variant="h6">Note Taking</Typography>
            </Toolbar>
          </AppBar>
    );
}