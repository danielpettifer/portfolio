import React from 'react'
import Link from 'gatsby-link'
import styles from './menu.css'

const Menu = ({ siteTitle }) => (
  <div>
    <a className="MenuButton toggle" id="test" href="#example">
      <div className="MenuBarTop"></div>
      <div className="MenuBarBottom"></div>
    </a> 
    <div className="Menu toggle-content" id="example">
      <div className="MenuGroup">
        <div className="MenuGroupSection">
          <h2 className="MenuTitle">UX • UI • Frontend dev</h2>
          <Link to="#" className="MenuLink">
            <div className="MenuLinkTitle">Applied <span className="MenuLinkDetail">Head of UX</span></div>
            <div className="MenuLinkRollover"></div>
          </Link>
          <Link to="#" className="MenuLink">
            <div className="MenuLinkTitle">dpet <span className="MenuLinkDetail">UI</span></div>
            <div className="MenuLinkRollover"></div>
          </Link>
        </div>
        <div className="MenuGroupSection">
          <h2 className="MenuTitle">Responsive collaborations</h2>
          <Link to="#" className="MenuLink">
            <div className="MenuLinkTitle">Open Up Challenge</div>
            <div className="MenuLinkRollover"></div>
          </Link>
          <Link  to="#" className="MenuLink">
            <div className="MenuLinkTitle">Open Contracting Partnership</div>
            <div className="MenuLinkRollover"></div>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

var show = function (elem) {
	elem.style.left = '0px';
};

var hide = function (elem) {
	elem.style.left = '-80vw';
};

var toggle = function (elem) {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).left === '0px') {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};

// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);

export default Menu
