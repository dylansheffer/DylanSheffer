import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from "gatsby-image";

import Layout from '../components/layout'
import SocialIcons from '../components/SocialIcons';
import Avatar from '../components/Avatar';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const { fixed: dylan } = data.profileImage.childImageSharp;
    const { fixed: kaitlinAndB } = data.kaitlinAndB.childImageSharp;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

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
              <p className="">My name&#39;s Dylan and I&#39;m a web developer based out of beautiful Charlottesville, Virginia. My passion is creating delightful and inclusive user-experiences.</p>
              <div className="kaitlin">
                <Img fixed={kaitlinAndB} alt="My Girlfriend Kaitlin and my dog Basil at the top of a mountain." />
              </div>
              <p>Outside of code, I spend my time playing video games, brewing gongfu tea, and most importantly hanging out with my beautiful girlfriend and dog ❤.</p>
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
      fixed(width: 250, height: 250) {
        ...GatsbyImageSharpFixed
      }
    }
    },
    kaitlinAndB: file(relativePath: {eq: "kaitlin-and-b.jpg"}) {
    childImageSharp {
      fixed(width: 175, height: 175) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  }
`
