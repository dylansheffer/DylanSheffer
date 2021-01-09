import styled from 'styled-components';

export const PostHeaderStyles = styled.header`
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 0;
  }
`;

export const PostMetaData = styled.div`
  margin: 0.75rem 0;
  font-size: 1.75rem;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  a {
    /* Remove link animation because of :after element */
    box-shadow: none;
    color: var(--yellow);
    .edit-icon {
      color: var(--white);
    }
    &:hover,
    :focus {
      color: var(--yellow);
      box-shadow: none;
    }
    :focus {
      > span {
        color: var(--black);
        * {
          color: var(--black);
        }
        box-shadow: var(--link-underline-focus);
      }
    }
  }
  & > * {
    :not(:last-child):after {
      /* pseudo elements will be read unless an alt empty alt text is specified */
      content: '#' / '';
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
  @media (max-width: 600px) {
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
`;

/* Used for applying underline styles to elements without effecting the :after element in the post header */
export const Underline = styled.span`
  width: fit-content;
  color: var(--yellow);
  transition: var(--link-transition);
  box-shadow: var(--link-underline);
  text-decoration: none;
  &:hover,
  :focus,
  :focus-within {
    color: var(--black);
    * {
      color: var(--black);
    }
    box-shadow: var(--link-underline-focus);
  }
`;
