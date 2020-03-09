import './styles.css';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';

import { AppContext } from '../app-context/app-context';
import { getTextTimeSincePublished } from '../../utils/video-uitls';

export default function VideoDetail() {
  const appContext = useContext(AppContext);

  return (
    <div>
      {appContext && appContext.selectedVideo && (
        <div className='video-detail-main-container'>
          <div className='video-detail-container'>
            <iframe
              className='video-detail-iframe'
              title='YoutubeVideo'
              src={`https://www.youtube.com/embed/${appContext.selectedVideo.id.videoId}`}
              frameBorder='0'
            />
          </div>
          <div className='video-detail-info'>
            <Typography
              variant='h6'
              component='div'
              color='primary'
              align='left'
              dangerouslySetInnerHTML={{
                __html: appContext.selectedVideo.snippet.title
              }}
            />
            <Typography align='left' component='div'>
              <Link
                color='secondary'
                href={
                  'https://www.youtube.com/channel/' +
                  appContext.selectedVideo.snippet.channelId
                }
                target='_blank'
                rel='noreferrer'
                variant='body1'
              >
                {appContext?.selectedVideo.snippet.channelTitle}
              </Link>
              <Typography color='secondary' variant='body1' display='inline'>
                {' - ' +
                  getTextTimeSincePublished(
                    appContext?.selectedVideo.snippet.publishedAt
                  )}
              </Typography>
            </Typography>
            <Typography
              variant='body2'
              align='left'
              component='div'
              dangerouslySetInnerHTML={{
                __html: appContext.selectedVideo.snippet.description
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
