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
    transition: var(--link-transition);
    color: var(--text);
  }
  &:hover,
  :focus {
    color: var(--black);
    .edit-icon {
      color: var(--black);
    }
  }
`;

export const EditOnGitHub = ({ url, children, ...props }) => (
  <EditOnGitHubStyles
    className="edit"
    rel="noopener noreferrer"
    target="_blank"
    href={url}
    {...props}
  >
    <span>{children || `Edit Post`}</span>{' '}
    <IoLogoGithub className="edit-icon" />
  </EditOnGitHubStyles>
);
