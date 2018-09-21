import React, { Component } from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'

const MyNav = styled.nav`
  background-color: red;
  ul {
    display: flex;
    list-style: none;
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <MyNav>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Work</Link></li>
          <li><Link to="">Blog</Link></li>
        </ul>
      </MyNav>
    )
  }
}
