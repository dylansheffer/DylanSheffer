import React, { Fragment } from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTwitch, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'


import { MainNavigation } from './Navigation';
import Footer from './Footer';

import '@reach/skip-nav/styles.css';
import '../styles/style.scss';

library.add(faTwitter, faTwitch, faGithub, faYoutube);

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
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
