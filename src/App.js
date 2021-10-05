import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import AppBarTypeTest from './appBar';
import theme from './theme';
import RouterSetup from './Router';



function App() {
  return (
    <ThemeProvider theme={theme}>
          <AppBarTypeTest/>
          <div className="App">
            <header className="App-header">
              <RouterSetup/>
            </header>
          </div>
    </ThemeProvider>
  );
}

export default App;
