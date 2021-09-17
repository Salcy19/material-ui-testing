import './App.css';
import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';

import NotesList from './NoteTaking'
import AppBarTypeTest from './appBar';
import GifButton from './giphyGenerator';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBarTypeTest/>
      <div className="App">
        <header className="App-header">
          <NotesList/>
          <Grid container spacing ={2} justifyContent='flex-end'>
            <Grid item xs>
              <GifButton/>
            </Grid>
          </Grid>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
