import React, { Component } from 'react'
import { Link } from 'gatsby';
import Img from "gatsby-image";

export default class Cards extends Component {
  render() {
    const { data, className } = this.props;
    return (
      <div className={`cards ${className || ''}`}>
        <ul>
          {
            data.map(d =>  {
              const uniq = Math.random().toString(36).substr(2, 9);
              return (<Card data={d} key={uniq} />)
            })
          }
        </ul>
      </div>
    )
  }
}

export class Card extends Component {
  render() {
    const { title, image, excerpt, link } = this.props.data;
    console.log(image);
    return (
      <li className="card">
        <div className="card--img">
          <img src={image} alt=""/>
          {/* <Img fixed={image} /> */}
        </div>
        <div className="card--text">
          <h2 className="no-md">
            <Link to={link}>{title}</Link>
          </h2>
          <p>{excerpt}</p>
        </div>
      </li>
    )
  }
}

