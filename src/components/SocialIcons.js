import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialIcons extends Component {
  render() {
    return (
      <div className="flex social-icons">
        <SocialIcon
          link='https://twitter.com/dylansheffer'
          icon={['fab', 'twitter']}
          label='View Twitter Page'
          className="social-icon__twitter"
        />
        <SocialIcon
          link='https://github.com/dylansheffer/'
          icon={['fab', 'github']}
          label='View GitHub Page'
          className="social-icon__github"
        />
        <SocialIcon
          link='https://www.linkedin.com/in/dylansheffer/'
          icon={['fab', 'linkedin']}
          label='View Linkedin Profile'
          className="social-icon__twitter"
        />
      </div>
    )
  }
}

const SocialIcon = ({ link, icon, label, className }) => (
    <a className={`social-icon ${className}`} href={ link } aria-label={ label } >
        <FontAwesomeIcon icon={icon} />
    </a>
)
