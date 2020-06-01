import styled from 'styled-components';

export const PostHeaderStyles = styled.header`
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 0;
  }
  .post-metadata {
    margin: 0.75rem 0;
    font-size: 1.75rem;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    a {
      box-shadow: none;
      color: var(--yellow);
      text-decoration: underline;
      .edit-icon {
        color: var(--white);
      }
    }
    & > * {
      :not(:last-child):after {
        content: '#';
        text-decoration: none;
        box-shadow: none;
        display: inline-block;
        margin-left: 1.5rem;
        color: var(--yellow);
        font-weight: 600;
        font-style: normal;
        align-self: center;
      }
    }
  }
  @media (max-width: 600px) {
    .post-metadata {
      display: flex;
      flex-direction: column;
      align-items: normal;
      & > * {
        margin: 0.5rem 0;
        :not(:last-child):after {
          content: '';
        }
      }
    }
  }
`;
