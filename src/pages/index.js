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
        <h1>Hi Daniel</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/video">Watch the video</Link>

        <div className="CardGroup">
          <Card 
            title="Project number 1"
            text="another thing"
            // image={require('../images/wallpaper.jpg')} 
            />
             <Card 
            title="Project number 1"
            text="another thing"
            // image={require('../images/wallpaper.jpg')} 
            />
             <Card 
            title="Project number 1"
            text="another thing"
            // image={require('../images/wallpaper.jpg')} 
            />
             <Card 
            title="Project number 1"
            text="another thing"
            // image={require('../images/wallpaper.jpg')} 
            />
             <Card 
            title="Project number 1"
            text="another thing"
            // image={require('../images/wallpaper.jpg')} 
            />
             <Card 
            title="Project number 1"
            text="another thing"
            // image={require('../images/wallpaper.jpg')} 
            />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
