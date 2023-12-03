import React from "react";
import spaces from "../../data/spaces";

function Spaces() {
  return (
    <section className="spaces">
      <div className="text-items">
        <span>
          We are the next gen <br />
          coworking platform
        </span>
        <p>
          Premier provider of office rental solutions for businesses of all
          sizes flexible plans and competitive rates.
        </p>
      </div>
      <div className="imgs-container">
        {spaces.map((space, i) => {
          return (
            <div key={i} className="img-item">
              <img src={space.imgSrc} alt="" />
              <div className="post-title">{space.title}</div>
              <span>{space.label}</span>
            </div>
          );
        })}
      </div>
      <div className="browse-all-btn">Browse All</div>
    </section>
  );
}

export default Spaces;
