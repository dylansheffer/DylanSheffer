import React from 'react';
import { Link } from 'gatsby';

export const LinkedLogo = ({ link = '/', label = 'Dylan Sheffer Logo', ariaHidden = false, className }) => (
  <Link className={`linked-logo ${className}`} to={link} aria-label={label} aria-hidden={ariaHidden} >
      <Logo />
  </Link>
)

const Logo = ({label = 'Dylan Sheffer Logo', ariaHidden = false}) => (
  <div className="logo" aria-label={label} aria-hidden={ariaHidden}>
    <span className="logo-content">#</span>
  </div>
)

export default Logo;