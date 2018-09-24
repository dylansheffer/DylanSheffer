import React from 'react';
import { Link } from 'gatsby';

const Logo = ({ link, icon, label }) => (
  <Link className="logo" href={link} aria-label={label} >
      <FontAwesomeIcon icon={icon} />
  </Link>
)

export default Logo;