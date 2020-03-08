import './styles.css';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext, useState } from 'react';

import logo from '../../assets/exp-logo.png';
import { AppContext } from '../app-context/app-context';

export default function NavBar() {
  const appContext = useContext(AppContext);
  const [searchText, setSearchText] = useState('');

  function onChangeText(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSearchText(event.target.value);
  }

  function onSubmit(event: React.KeyboardEvent<HTMLDivElement>) {
    if (
      event.key === 'Enter' &&
      searchText &&
      appContext?.videosHook.status !== 'loading'
    ) {
      appContext?.videosHook.fetchVideos(searchText);
    }
  }

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
        value={searchText}
        onChange={onChangeText}
        onKeyPress={onSubmit}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='upload picture'
                component='span'
                disabled={appContext?.videosHook.status === 'loading'}
                onClick={() => appContext?.videosHook.fetchVideos(searchText)}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}
