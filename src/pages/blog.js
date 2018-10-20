import React, { Component } from 'react'

import Layout from '../components/layout';
import Cards from '../components/Card';

import kaitlin from '../img/kaitlin-and-b.jpg';

const testData = [
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 1",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/",
  },
  {
    title: "Test Title 2",
    image: kaitlin,
    excerpt: "You're meant to have fun in life. You can do anything here. So don't worry about it.",
    link: "/about",
  }
]

export default class Blog extends Component {
  render() {
    return (
      <Layout className="app_blog">
        <main id="content" className="content__cards">
          <div className="content--wrapper__cards">
            <h1>Blog</h1>
            <Cards data={testData} />
          </div>
        </main>
      </Layout>
    )
  }
}
