import './styles.css';

import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import VideoItem from '../video-item/video-item';

const videos = [
  '/breaking-bad.webp',
  '/the-leftovers.jpg',
  '/game-of-thrones.jpg',
  '/true-detective.jpg',
  '/walking-dead.jpg'
];

export default function VideoList() {
  const videosMenu = videos.map(video => <VideoItem key={video} />);

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
