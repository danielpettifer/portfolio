import React from 'react'
import Link from 'gatsby-link'
import styles from './Menu.css'

const Menu = ({ siteTitle }) => (
  <div>
    <div className="MenuButton">
      <div className="MenuCircle" id="MenuCircle"></div>
      <div className="MenuBarTop" id="MenuBarTop"></div>
      <div className="MenuBarBottom" id="MenuBarBottom"></div>
      <a className="toggle" id="test" href="#example"></a>
    </div> 
    <div className="Menu toggle-content" id="example">
      <div className="MenuGroup">
        <div className="MenuGroupSection">
          <h2 className="MenuTitle DownAndOut ItemOne">UX • UI • Frontend dev</h2>
          <Link to="/applied/" className="MenuLink DownAndOut ItemTwo">
            <div className="MenuLinkTitle">Applied <span className="MenuLinkDetail">Head of UX</span></div>
            <div className="MenuLinkRollover"></div>
          </Link>
          <Link to="#" className="MenuLink DownAndOut ItemThree">
            <div className="MenuLinkTitle">DPet <span className="MenuLinkDetail">UX UI React</span></div>
            <div className="MenuLinkRollover"></div>
          </Link>
        </div>
        <div className="MenuGroupSection">
          <h2 className="MenuTitle DownAndOut ItemFour">Responsive collaborations</h2>
          <Link to="#" className="MenuLink DownAndOut ItemFive">
            <div className="MenuLinkTitle">Open Up Challenge</div>
            <div className="MenuLinkRollover"></div>
          </Link>
          <Link  to="#" className="MenuLink DownAndOut ItemSix">
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
  document.getElementById('MenuBarTop').style.transform = 'rotate(45deg)';
  document.getElementById('MenuBarTop').style.top = '4px';
  document.getElementById('MenuBarTop').style.backgroundColor = '#000';
  document.getElementById('MenuBarBottom').style.backgroundColor = '#000';
  document.getElementById('MenuBarBottom').style.transform = 'rotate(-45deg)';
  document.getElementById('MenuBarBottom').style.bottom = '4px';
  document.getElementById('MenuCircle').style.transform = 'scale(0,0)';
  document.getElementById('MenuCircle').style.opacity = '0';
  document.getElementById('Header').style.backgroundColor = '#fff';
  document.getElementById('example').style.backgroundColor = '#fff';

  var x = document.getElementsByClassName("DownAndOut");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.opacity = '1';
      x[i].style.transform = 'translateY(20px)';
  }

};

var hide = function (elem) {
  elem.style.left = '-100vw';
  document.getElementById('MenuBarTop').style.transform = 'rotate(0deg)';
  document.getElementById('MenuBarTop').style.top = '0';
  document.getElementById('MenuBarTop').style.backgroundColor = '#000';
  document.getElementById('MenuBarBottom').style.backgroundColor = '#000';
  document.getElementById('MenuBarBottom').style.transform = 'rotate(0deg)';
  document.getElementById('MenuBarBottom').style.bottom = '0';
  document.getElementById('MenuCircle').style.transform = 'scale(1,1)';
  document.getElementById('MenuCircle').style.opacity = '1';
  document.getElementById('Header').style.backgroundColor = '#e9eced';
  document.getElementById('example').style.backgroundColor = '#e9eced';
  var x = document.getElementsByClassName("DownAndOut");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.opacity = '0';
      x[i].style.transform = 'translateY(-20px)';
  }
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
