import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import VideoList from './components/video-list/video-list';

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
        <VideoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
