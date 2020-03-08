import { useState } from 'react';
import getYouTuBeVideos from '../services/get-youtube-videos';
import { YouTuBeVideo } from '../models/youtube-video';

export function useGetVideos(): useGetVideosType {
  const [status, setStatus] = useState<
    'iddle' | 'loading' | 'success' | 'error'
  >('iddle');
  const [videos, setVideos] = useState<YouTuBeVideo[]>([]);
  const [error, setError] = useState<string>('');

  function fetchVideos(searchWord: string) {
    setStatus('loading');

    getYouTuBeVideos(searchWord)
      .then(response => {
        setVideos(response.data.items);
        setStatus('success');
      })
      .catch(err => {
        if (err.response.status === 404) {
          setError('Endpoint no encontrado');
        } else {
          setError(err.response.data.error.message);
        }

        setStatus('error');
      });
  }

  return { videos, status, error, fetchVideos };
}

export interface useGetVideosType {
  videos: YouTuBeVideo[];
  status: 'iddle' | 'loading' | 'success' | 'error';
  error: string;
  fetchVideos: (searchWord: string) => void;
}
