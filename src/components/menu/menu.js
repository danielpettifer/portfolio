import React from 'react'
import Link from 'gatsby-link'
import styles from './menu.css'

const Menu = ({ siteTitle }) => (
  <div>
    <div className="MenuButton">
      <div className="MenuBarTop"></div>
      <div className="MenuBarBottom"></div>
    </div> 
    <div className="Menu">
      <div className="MenuGroup">
        <div className="MenuGroupSection">
          <h2 className="MenuTitle">UX • UI • Frontend dev</h2>
          <Link className="MenuLink">
            <div className="MenuLinkTitle">Applied <span className="MenuLinkDetail">Head of UX</span></div>
            <div className="MenuLinkRollover"></div>
          </Link>
          <Link className="MenuLink">
            <div className="MenuLinkTitle">dpet <span className="MenuLinkDetail">UI</span></div>
            <div className="MenuLinkRollover"></div>
          </Link>
        </div>
        <div className="MenuGroupSection">
          <h2 className="MenuTitle">Responsive collaborations</h2>
          <Link className="MenuLink">
            <div className="MenuLinkTitle">Open Up Challenge</div>
            <div className="MenuLinkRollover"></div>
          </Link>
          <Link className="MenuLink">
            <div className="MenuLinkTitle">Open Contracting Partnership</div>
            <div className="MenuLinkRollover"></div>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Menu
