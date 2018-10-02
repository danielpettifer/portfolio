import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/header'
import Menu from '../components/menu/menu'
import Card from '../components/Card/Card'

const Applied = () => (
  <div>
    <Header />
    <Menu />
    <div className="Content">
    <h1>Applied</h1>
    <p>Case study</p>
    <Link to="/">Go back to the homepage</Link>
    <div className="CardGroup">
        <Link to="/">
          <Card 
            type="UX Case study"
            title="Applied"
            text="Role builder"
            // image={require('../images/wallpaper.jpg')} 
            />
          </Link>
             <Card 
              type="Tech"
              title="Applied"
              text="Vue JS, Progressive Web App, EJS, Ionic"
              // image={require('../images/wallpaper.jpg')} 
            />
             <Card 
             type="Tech"
            title="DPet Portfolio"
            text="React"
            // image={require('../images/wallpaper.jpg')} 
            />
          </div>
        </div>
  </div>
)

export default Applied
