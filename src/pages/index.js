import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/header';
import Menu from '../components/menu/menu';
import Card from '../components/Card/Card';

// images
// import wallpaper from './images/wallpaper.jpg';

const IndexPage = () => (
  <div>
    <Header />
    <Menu />
    <div className="Content">
      <div className="HeroGroup">
        <p className="MyName">Daniel Pettifer</p>
        <h1>I design, code, & get s**t done</h1>
        <p>I'm a UX / UI Frontend developer with design skills and management experience looking for my next challenge</p>
        <Link to="/page-2/">Go to page 2</Link>


      </div>
    </div>
  </div>
)

export default IndexPage
