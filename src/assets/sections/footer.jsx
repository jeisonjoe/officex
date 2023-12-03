import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import footerItems from "../../data/footer_items";

function Footer() {
  return (
    <footer className="footer">
      <h1>Officex</h1>
      <div className="footer-bottom">
        <div className="newsletter">
          <span>Subscribe to Our Newsletter</span>
          <div className="input-container">
            <input type="text" placeholder="Your Email" />
            <i>
              <BiRightArrowAlt />
            </i>
          </div>
        </div>

        <div className="menus">
          {footerItems.map((footerItem, i) => {
            return (
              <div key={i} className="menu-item">
                <div className="top">{footerItem.title}</div>
                {footerItem.items.map((item, i) => {
                  return (
                    <div key={i} className="list-item">
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
