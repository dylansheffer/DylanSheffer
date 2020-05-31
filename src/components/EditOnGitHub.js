import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';

const EditOnGitHubStyles = styled.a`
  display: inline-flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
  .edit-icon {
    color: var(--text);
  }
`;

export const EditOnGitHub = ({ url, children }) => (
  <EditOnGitHubStyles
    className="edit"
    rel="noopener noreferrer"
    target="_blank"
    href={url}
  >
    <span>{children || `Edit Post`}</span>{' '}
    <IoLogoGithub className="edit-icon" />
  </EditOnGitHubStyles>
);
