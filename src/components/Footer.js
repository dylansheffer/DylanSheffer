import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ContentContainer } from './styles/LayoutStyles';

const SocialLinks = styled.nav`
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    color: var(--white);
    font-size: 4.5rem;
    margin: 0 2rem;
  }
`;

const FooterStyles = styled.footer`
  background-color: var(--black);
  color: var(--white);
  .copyright {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Footer = () => (
  <FooterStyles>
    <ContentContainer>
      <SocialLinks>
        <a
          href="http://github.com/dylansheffer"
          aria-label="Dylan Sheffer's GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="http://twitter.com/dylansheffer"
          aria-label="Dylan Sheffer's Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/dylansheffer/"
          aria-label="Dylan Sheffer's LinkedIn"
        >
          <FaLinkedin />
        </a>
      </SocialLinks>
      <div className="copyright">
        &copy;{new Date().getFullYear()} - Dylan Sheffer Consulting LLC
      </div>
    </ContentContainer>
  </FooterStyles>
);
