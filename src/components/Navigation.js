import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby';

export class Navigation extends Component {
  render() {
    const { children, className, navItems } = this.props;
    return (
      <nav className={className}>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Work</Link></li>
          <li><Link to="">Blog</Link></li>
          {navItems}
        </ul>
        {children}
      </nav>
    )
  }
}

export class MainNavigation extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Navigation className="main-nav" />
        {children}
      </Fragment>
    )
  }
}


