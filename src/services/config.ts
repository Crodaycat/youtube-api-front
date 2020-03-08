import axios from 'axios';
import { YOUTUBE_API_BASE_URL, YOUTUBE_API_KEY } from '../config/config';

export default axios.create({
  baseURL: YOUTUBE_API_BASE_URL,
  params: {
    key: YOUTUBE_API_KEY
  }
});
