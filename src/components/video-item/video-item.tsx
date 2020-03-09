import './styles.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { YouTuBeVideo } from '../../models/youtube-video';
import { getTextTimeSincePublished } from '../../utils/video-uitls';
import Link from '@material-ui/core/Link';

interface IProps {
  video: YouTuBeVideo;
}

export default function VideoItem(props: IProps) {
  return (
    <Card className='video-container'>
      <CardMedia
        className='video-image'
        image={props.video.snippet.thumbnails.medium.url}
      />
      <CardContent>
        <Typography
          className='video-title'
          gutterBottom
          variant='body2'
          component='p'
        >
          {props.video.snippet.title}
        </Typography>
        <Link
          className='video-channel'
          href={
            'https://www.youtube.com/channel/' + props.video.snippet.channelId
          }
          target='_blank'
          rel='noreferrer'
          variant='body2'
        >
          {props.video.snippet.channelTitle}
        </Link>

        <Typography
          gutterBottom
          variant='body2'
          color='textSecondary'
          component='p'
        >
          {getTextTimeSincePublished(props.video.snippet.publishedAt)}
        </Typography>
      </CardContent>
    </Card>
  );
}
