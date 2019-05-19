import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";

export const LinkedLogo = ({ link = '/', label = 'Dylan Sheffer Logo', ariaHidden = false, className }) => (
  <Link
    className={`linked-logo ${className}`}
    to={link}
    aria-label={label}
    aria-hidden={ariaHidden}
    title="Dylan Sheffer Logo"
  >
      <Logo />
  </Link>
)

const Logo = () => (
  <StaticQuery
    query={graphql`
    query {
      logoYellow: file(relativePath: {eq: "logo-yellow-full.svg"}) {
      childImageSharp {
        fixed(width: 175, height: 175) {
          ...GatsbyImageSharpFixed
        }
      }
      }
    }
    `}
    // TODO: Figure out what the shape of `data` is so I can correctly pass it into the `Img` component
    render={data => (
      <Img fixed={data.logoYellow} alt="Dylan Sheffer" />
    )}
  />
)

// export class Logo extends Component {
//   render() {
//     const { fixed: logoImage } = data.logoYellow.childImageSharp;
//     return (
//       <Img fixed={logoImage} />
//     )
//   }
// }

export default Logo;