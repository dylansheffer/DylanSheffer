import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LogoImage from '../../static/logo.svg';
import { ContentContainer } from './styles/LayoutStyles';

const NavStyles = styled.nav`
  background-color: var(--surface-dark);
  box-shadow: var(--shadow);
  .content-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    .logo {
      position: relative;
      top: 25%;
    }
  }
  @media (min-width: 500px) {
    z-index: 10;
    height: 64px;
    position: sticky;
    top: 0;
    .content-container {
      flex-direction: row;
    }
    .logo {
      position: absolute;
      top: 25%;
    }
  }
`;

const Logo = styled.div`
  background-image: url(${LogoImage});
  background-size: contain;
  width: 88px;
  height: 88px;
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
  margin: 4px 8px;
  /* &::after {
    color: var(--yellow);
    margin-left: 4px;
    content: '|';
  } */
  a {
    color: var(--yellow);
    font-family: 'Hack', monospace;
    text-decoration: none;
    &:focus,
    :hover {
      text-decoration: underline;
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
      <Link to="/services">Services</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/projects">Projects</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/posts">Blog</Link>
    </LinkItem>
    <LinkItem>
      <Link to="/contact">Contact</Link>
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
