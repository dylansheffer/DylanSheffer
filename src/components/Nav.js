import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LogoImage from '../../static/logo.svg';
import { ContentContainer } from './styles/LayoutStyles';
import { Button } from './Button';

const NavStyles = styled.nav`
  background-color: var(--surface-dark);
  box-shadow: var(--shadow);
  .content-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    .logo {
      margin-top: 1rem;
      box-shadow: none;
    }
  }
  @media (min-width: 550px) {
    z-index: 10;
    height: 7rem;
    position: sticky;
    top: 0;
    .content-container {
      flex-direction: row;
      .logo {
        margin-top: 0;
        position: absolute;
        top: 5%;
      }
    }
  }
`;

const Logo = styled.div`
  background-image: url(${LogoImage});
  background-size: contain;
  width: 9rem;
  height: 9rem;
`;

const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 1.5rem;
  color: var(--yellow);
  a {
    font-family: 'Hack', monospace;
    text-decoration: none;
    box-shadow: none;
    &:focus,
    :hover,
    &[aria-current='page'] {
      color: var(--yellow);
      box-shadow: var(--link-underline);
    }
  }
  a.cta {
    &:focus,
    :hover,
    &[aria-current='page'] {
      background: var(--white);
      color: var(--black);
    }
  }
`;

const Spacer = styled.div`
  flex: 1 1 0;
`;

const NavLinks = ({ children }) => (
  <LinkContainer>
    <LinkItem>
      <Link to="/about">About</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/projects">Work</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/posts">Articles</Link>
    </LinkItem>
    <LinkItem>
      <Button className="cta" as={Link} to="/hire-me">
        Hire Me
      </Button>
    </LinkItem>
  </LinkContainer>
);

export const Nav = () => (
  <NavStyles>
    <ContentContainer>
      <Link className="logo" to="/" aria-label="Home">
        <Logo />
      </Link>
      <Spacer />
      <NavLinks />
    </ContentContainer>
  </NavStyles>
);
