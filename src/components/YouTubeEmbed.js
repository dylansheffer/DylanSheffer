import React from 'react';
import { MyFrame } from './MyFrame';

export const YouTubeEmbed = ({ youtubeId, ...props }) => (
  <MyFrame
    src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
    frameborder="0"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    {...props}
  />
);
