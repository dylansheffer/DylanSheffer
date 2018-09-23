import React, { Component, Fragment } from 'react';
import Img from "gatsby-image";

export default class Avatar extends Component {
  render() {
    const { image, alt, className } = this.props;
    return (
      <Fragment>
        <Img fixed={image} alt={alt} className={`avatar ${className || ''}`} />
      </Fragment>
    )
  }
}