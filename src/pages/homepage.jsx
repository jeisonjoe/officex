import React from "react";
import Header from "../assets/sections/header";
import Spaces from "../assets/sections/spaces";
import Locations from "../assets/sections/locations";
import Testimonials from "../assets/sections/testimonials";
import VisitUs from "../assets/sections/visit-us";
import Footer from "../assets/sections/footer";

function Homepage() {
  document.title = "OfficeX - Find Your Next Coworking Office";
  return (
    <div className="page-wrapper">
      <Header />
      <Spaces />
      <Locations />
      <Testimonials />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default Homepage;
