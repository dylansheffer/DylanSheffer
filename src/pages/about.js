import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SocialIcons from '../components/SocialIcons';
import Avatar from '../components/Avatar';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const { fixed: dylan } = data.profileImage.childImageSharp;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout className="app__about">
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div id="content" className="content__about">
          <div className="content--wrapper__about">
            <h1>About</h1>
            <div>
              <Avatar
                image={dylan}
                alt="Dylan Sheffer aggressively looking at the camera"
              />
              <SocialIcons />
            </div>
            <div className="text">
              <p className="">Lorem ipsum dolor amet cred 8-bit asymmetrical neutra selvage gastropub. Listicle brunch hexagon plaid poutine swag.</p>
              <p>Stumptown polaroid next level taiyaki, before they sold out blue bottle venmo heirloom la croix vape dreamcatcher. Unicorn poke swag literally direct trade farm-to-table distillery single-origin coffee irony beard 90's leggings hammock tilde normcore.</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

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
      fixed(width: 175, height: 175) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  }
`
