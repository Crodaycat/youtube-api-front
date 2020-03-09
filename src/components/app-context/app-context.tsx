import React, { createContext, ReactElement, useState, useEffect } from 'react';

import { useGetVideos, useGetVideosType } from '../../hooks/use-get-videos';
import { YouTuBeVideo } from '../../models/youtube-video';

interface IAppContext {
  videosHook: useGetVideosType;
  selectedVideo: YouTuBeVideo | null;
  setSelectedVideo: (video: YouTuBeVideo | null) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

interface IProps {
  children: ReactElement;
}

export function AppProvider(props: IProps) {
  const { status, videos, error, fetchVideos } = useGetVideos();
  const [selectedVideo, setSelectedVideo] = useState<YouTuBeVideo | null>(null);

  useEffect(() => {
    if (status === 'loading') {
      setSelectedVideo(null);
    } else if (status === 'success' && videos.length > 0) {
      setSelectedVideo(videos[0]);
    }
  }, [status, videos]);

  return (
    <AppContext.Provider
      value={{
        videosHook: { status, videos, error, fetchVideos },
        selectedVideo,
        setSelectedVideo
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
