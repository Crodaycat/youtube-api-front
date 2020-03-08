import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1abc9c'
    }
  },
  typography: {
    fontFamily: ['"Comfortaa"', 'cursive'].join(',')
  }
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <div className='App'>
        <NavBar />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
