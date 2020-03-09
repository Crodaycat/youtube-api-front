import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { AppProvider } from './components/app-context/app-context';
import NavBar from './components/nav-bar/nav-bar';
import VideoList from './components/video-list/video-list';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1abc9c'
    },
    secondary: {
      main: '#a1cb00'
    }
  },
  typography: {
    fontFamily: ['"Comfortaa"', 'cursive'].join(',')
  }
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <AppProvider>
        <div className='App'>
          <NavBar />
          <VideoList />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
