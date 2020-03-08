import './nav-bar.css';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import logo from '../../assets/exp-logo.png';

export default function NavBar() {
  return (
    <div className='container nav-bar'>
      <div className='container'>
        <img className='nav-logo' src={logo} alt='Logo' />
        <div className='app-name'>Experimentality</div>
      </div>
      <TextField
        className='search-input'
        type='search'
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton aria-label='upload picture' component='span'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}
