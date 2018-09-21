import React from 'react'
import { Link } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Navigation from './Navigation';

import "@reach/skip-nav/styles.css";


class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div style={{"backgroundColor": "#ccc"}}>
        <SkipNavLink>Skip To Main Content</SkipNavLink>
        <Navigation />
        <SkipNavContent>
          {children}
        </SkipNavContent>
      </div>
    )
  }
}

export default Layout
