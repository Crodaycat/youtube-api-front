import { useState } from 'react';
import getYouTuBeVideos from '../services/get-youtube-videos';

export function useGetVideos() {
  const [status, setStatus] = useState<
    'iddle' | 'loading' | 'success' | 'error'
  >('iddle');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState();

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
          setError(err.response.error.errors.message);
        }

        setStatus('error');
      });
  }

  return { videos, setVideos, status, error, fetchVideos };
}
