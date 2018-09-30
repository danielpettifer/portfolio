import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header';
import Menu from '../components/menu/menu';

const IndexPage = () => (
  <div>
    <Header />
    <Menu />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi Daniel</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
