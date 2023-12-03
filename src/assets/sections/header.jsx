import React from "react";
import { BiChevronDown } from "react-icons/bi";

function Header() {
  return (
    <header className="site-header">
      <nav>
        <a href="#">About</a>
        <a href="#">Spaces</a>
        <a href="#">Locations</a>
        <a href="#">Contact</a>
      </nav>
      <div className="site-title">Officex</div>
      <div className="sub-title">
        Find Your Next <br />
        Coworking Office
      </div>
      <div className="header-actions">
        <span>Find & Make your interior really stand out from the box.</span>
        <div className="selectors-nav">
          <div className="dropdown-items">
            <div className="dropdown-item">
              Locations <BiChevronDown />
            </div>
            <div className="dropdown-item">
              Size <BiChevronDown />
            </div>
            <div className="dropdown-item">
              City <BiChevronDown />
            </div>
          </div>
          <div className="search-btn">Search Now</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
