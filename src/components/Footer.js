import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { ContentContainer } from './styles/LayoutStyles';

const SocialLinks = styled.nav`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  a {
    color: var(--white);
    font-size: 5rem;
    margin: 0 16px;
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
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="http://twitter.com/dylansheffer"
          aria-label="Dylan Sheffer's Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/dylansheffer/"
          aria-label="Dylan Sheffer's LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialLinks>
      <div className="copyright">
        &copy;{new Date().getFullYear()} - Dylan Sheffer
      </div>
    </ContentContainer>
  </FooterStyles>
);
