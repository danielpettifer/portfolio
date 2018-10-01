import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card/Card'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
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
)

export default SecondPage
