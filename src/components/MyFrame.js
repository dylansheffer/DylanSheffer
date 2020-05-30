import React from 'react';
import styled from 'styled-components';

const ResponsiveIFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* for 16:9 */
  padding-top: 25;
  height: 0;
`;

const MyFrameStyles = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MyFrame = ({ src, ...props }) => (
  <ResponsiveIFrame>
    <MyFrameStyles src={src} {...props} />
  </ResponsiveIFrame>
);
