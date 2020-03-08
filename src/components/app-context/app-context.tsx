import React, { createContext, ReactElement } from 'react';

import { useGetVideos, useGetVideosType } from '../../hooks/use-get-videos';

interface IAppContext {
  videosHook: useGetVideosType;
}

export const AppContext = createContext<IAppContext | null>(null);

interface IProps {
  children: ReactElement;
}

export function AppProvider(props: IProps) {
  const videosHook = useGetVideos();

  return (
    <AppContext.Provider value={{ videosHook }}>
      {props.children}
    </AppContext.Provider>
  );
}
