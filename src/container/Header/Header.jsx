import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans app__header-p" style={{ margin: "2rem 0" }}>
        Experience the burst of flavors of Nepali cuisine with an array of dishes from around the diverse Himalayan nation nestled
        between mountains and plains, forests and rivers.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
    Header
  </div>
);

export default Header;
