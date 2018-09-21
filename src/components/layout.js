import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import { MainNavigation } from './Navigation';

import "@reach/skip-nav/styles.css";


class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div style={{"backgroundColor": "#ccc"}}>
        <SkipNavLink>Skip To Main Content</SkipNavLink>
        <MainNavigation />
        <SkipNavContent>
          {children}
        </SkipNavContent>
      </div>
    )
  }
}

export default Layout
