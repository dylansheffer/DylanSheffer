import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from "gatsby-image";

import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { fixed: dylan } = data.profileImage.childImageSharp;
    console.log(dylan);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Img fixed={dylan} alt="Dylan Sheffer aggressively looking at the camera" />
        <h1>Dylan Sheffer</h1>
        <h2 className="no-md white">Web Developer. A11y Advocate. Tea Enthusiast.</h2>
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
    },
    profileImage: file(relativePath: {eq: "me.jpg"}) {
    childImageSharp {
      fixed(width: 300, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  }
`
