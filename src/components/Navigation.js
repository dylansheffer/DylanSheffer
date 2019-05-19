import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby';
import { graphql } from 'gatsby'

import { LinkedLogo } from '../components/Logo'

export class Navigation extends Component {
  render() {
    const { children, className, navItems, id, beforeItems } = this.props;
    return (
      <nav id={id} className={className}>
        <div className="nav-content">
          {beforeItems}
          <ul>
            <li><Link to="/">
              <div className="nav-item--content">
                Home
              </div>
            </Link></li>
            <li><Link to="/experience">
              <div className="nav-item--content">
                Experience
              </div>
            </Link></li>
            <li><a href="https://youtu.be/a4vb5qeamOk">
              <div className="nav-item--content">
                Talks
              </div>
            </a></li>
            <li><a href="https://github.com/dylansheffer">
              <div className="nav-item--content">
                Projects
              </div>
            </a></li>
            <li><Link to="/contact">
              <div className="nav-item--content">
                Contact
              </div>
            </Link></li>
            {navItems}
          </ul>
          {children}
        </div>
      </nav>
    )
  }
}

export class MainNavigation extends Component {
  render() {
    const { children } = this.props;
    const logo = <LinkedLogo className="nav--logo" />;
    return (
      <Fragment>
        <Navigation
          id="main-nav"
          beforeItems={logo}
        />
        {children}
      </Fragment>
    )
  }
}
