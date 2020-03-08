import axios from './config';

export default function getYoutubeVideo(searchWord: string) {
  return axios.get('/search', {
    params: {
      q: searchWord,
      part: 'snippet',
      type: 'video',
      maxResults: 6
    }
  });
}
