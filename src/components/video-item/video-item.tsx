import './styles.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

//i.ytimg.com/vi/3AKowBTVRxw/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBprRGrkc_r0Q8-drJ-IPPAoAUHXA
export default function VideoItem() {
  return (
    <Card className='video-container'>
      <CardMedia
        className='video-image'
        image='http://i.ytimg.com/vi/3AKowBTVRxw/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBprRGrkc_r0Q8-drJ-IPPAoAUHXA'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='body1'
          color='textSecondary'
          component='p'
        >
          Hola mundo
        </Typography>
        <Typography
          className='item-texts-contet'
          gutterBottom
          variant='body2'
          component='p'
        >
          Titulo del video
        </Typography>
        <Typography
          className='item-texts-contet'
          gutterBottom
          variant='body2'
          color='textSecondary'
          component='p'
        >
          Otro texto
        </Typography>
      </CardContent>
    </Card>
  );
}
