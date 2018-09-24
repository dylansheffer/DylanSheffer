import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinkedLogo } from '../components/Logo'

export class Navigation extends Component {
  render() {
    const { children, className, navItems, id } = this.props;
    return (
      <nav id={id} className={className}>
        <ul>
          {navItems}
          <li><Link to="/">
            <div className="nav-item--content">
              <FontAwesomeIcon className="nav-item--icon" icon="home" />
              Home
            </div>
          </Link></li>
          <li><Link to="/about">
            <div className="nav-item--content">
              <FontAwesomeIcon className="nav-item--icon" icon="user" />
              About
            </div>
          </Link></li>
          <li><Link to="/work">
            <div className="nav-item--content">
              <FontAwesomeIcon className="nav-item--icon" icon="code" />
              Work
            </div>
          </Link></li>
          <li><Link to="/blog">
            <div className="nav-item--content">
              <FontAwesomeIcon className="nav-item--icon" icon="pencil-alt" />
              Blog
            </div>
          </Link></li>
        </ul>
        {children}
      </nav>
    )
  }
}

export class MainNavigation extends Component {
  render() {
    const { children } = this.props;
    const logo = <li className="nav-item--logo"><LinkedLogo /></li>;
    return (
      <Fragment>
        <Navigation id="main-nav" navItems={logo} />
        {children}
      </Fragment>
    )
  }
}


