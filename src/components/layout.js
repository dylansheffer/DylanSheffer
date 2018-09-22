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
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'viewport', content: 'width=device-width,initial-scale=1'}
          ]}
          title={siteTitle}
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
