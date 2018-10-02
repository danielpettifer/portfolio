import React from 'react'
import Link from 'gatsby-link'
import styles from './header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header" id="Header"> 
      <div className="BrandContainer">
      <Link to="/" className="Brand">Daniel Pettifer <span className="BrandDetail">UX UI Frontend</span></Link>
      </div>
    </div>
  </div>
)

export default Header
