import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';

const EditOnGitHubStyles = styled.a`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
  .edit-icon {
    color: var(--text);
  }
`;

export const EditOnGitHub = ({ url }) => (
  <EditOnGitHubStyles
    className="edit"
    rel="noopener noreferrer"
    target="_blank"
    href={url}
  >
    <span>Edit Post</span> <IoLogoGithub className="edit-icon" />
  </EditOnGitHubStyles>
);
