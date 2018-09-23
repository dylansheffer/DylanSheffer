import React, { Component, Fragment } from 'react';
import Img from "gatsby-image";

export default class Avatar extends Component {
  render() {
    const { image, alt } = this.props;
    return (
      <Fragment>
        <Img fixed={image} alt={alt} />
      </Fragment>
    )
  }
}