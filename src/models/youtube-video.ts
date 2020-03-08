export interface YouTuBeVideo {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
}

export interface VideoId {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
