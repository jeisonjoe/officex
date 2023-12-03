import React from "react";
import labelImage from "../images/label.jpeg";
import { BiUser } from "react-icons/bi";

function Locations() {
  return (
    <section className="locations">
      <div className="lhs">
        <div className="top-info">Any Size & Location</div>
        <div className="bottom-info">
          <h2>
            We Have Offices <br />
            for any Team Size
          </h2>
          <p>
            No matter how many people you need to accommodate, we have offices
            that are perfect for any team size, ranging from two to 2000+ people
            or more.
          </p>
          <div className="browse-all-btn">Browse All</div>
        </div>
      </div>
      <div className="rhs">
        <div className="img-container">
          <img src={labelImage} alt="" />
          <div className="labels-container">
            <div className="label-item">
              <i>
                <BiUser />
              </i>
              <div className="label-info">
                <span>For Small Teams</span>
                <p>2-8 people</p>
              </div>
            </div>
            <div className="label-item">
              <i>
                <BiUser />
              </i>
              <div className="label-info">
                <span>For Small Teams</span>
                <p>2-8 people</p>
              </div>
            </div>
            <div className="label-item">
              <i>
                <BiUser />
              </i>
              <div className="label-info">
                <span>For Small Teams</span>
                <p>2-8 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
