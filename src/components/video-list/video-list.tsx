import './styles.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import React, { useContext } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { AppContext } from '../app-context/app-context';
import VideoItem from '../video-item/video-item';

export default function VideoList() {
  const appContext = useContext(AppContext);
  const videosHook = appContext?.videosHook;

  if (!videosHook || videosHook.status === 'iddle') {
    return <h1>Busca videos para listar el resultado</h1>;
  }

  if (videosHook.status === 'error') {
    return <h1>Error al consultar los videos: {videosHook.error}</h1>;
  }

  if (videosHook.status === 'loading') {
    return (
      <div className='loading-spinner-container'>
        <CircularProgress size={90} thickness={5} />
        <h4>Buscando resultados...</h4>
      </div>
    );
  }

  const videosMenu = videosHook.videos.map(video => (
    <VideoItem key={video.id.videoId} />
  ));

  return (
    <div>
      <ScrollMenu
        data={videosMenu}
        arrowLeft={
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <ArrowBack />
          </IconButton>
        }
        arrowRight={
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <ArrowForward />
          </IconButton>
        }
      />
    </div>
  );
}
