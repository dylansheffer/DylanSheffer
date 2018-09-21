import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'

const NavItems = styled.ul`
margin: 0;
padding: 0;
display: flex;
list-style: none;
`
export class Navigation extends Component {
  render() {
    const { children, navItems } = this.props;
    return (
      <nav>
        <NavItems>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Work</Link></li>
          <li><Link to="">Blog</Link></li>
          {navItems}
        </NavItems>
        {children}
      </nav>
    )
  }
}

const MainNavWrap = styled(Navigation)`
width: 100%;
background-color: red;
`
export class MainNavigation extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <MainNavWrap />
        {children}
      </Fragment>
    )
  }
}


