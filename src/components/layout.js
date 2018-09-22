import React, { Fragment } from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { MainNavigation } from './Navigation';

import '@reach/skip-nav/styles.css';
import '../styles/style.scss';


class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'viewport', content: 'width=device-width,initial-scale=1'}
          ]}
        />
        <SkipNavLink>Skip To Main Content</SkipNavLink>
        <MainNavigation />
        <SkipNavContent>
          {children}
        </SkipNavContent>
      </Fragment>
    )
  }
}

export default Layout
