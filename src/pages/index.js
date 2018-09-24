import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SocialIcons from '../components/SocialIcons';
import Avatar from '../components/Avatar';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { fixed: dylan } = data.profileImage.childImageSharp;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout className="app__home">
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div id="content" className="content__home">
        <div className="content--wrapper__home">
          <Avatar
            image={dylan}
            alt="Dylan Sheffer aggressively looking at the camera"
          />
          <h1>Dylan&nbsp;Sheffer</h1>
          <p className="">Web Developer. A11y Advocate. <br />Tea Enthusiast.</p>
          <SocialIcons />
        </div>
        </div>
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
