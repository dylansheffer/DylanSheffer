import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          meta={[ { name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h1>Dylan Sheffer</h1>
        <h2 className="no-md">Web Developer. A11y Advocate. Tea Enthusiast.</h2>
      </Layout>
    )
  }
}

export default Index

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
