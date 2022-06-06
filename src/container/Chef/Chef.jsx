import React from "react";

import { SubHeading } from "../../components";
import { images, imagese } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Our ingredients are sourced from local farms that use the healthiest farming practices.</p>
        </div>

        <p className="p__opensans">
          We believe in quality over quantity for all our dishes and drinks, both sweet or savory. We take pride in bringing
          Nepali cuisine to the forefront of the culinary world.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Minu Thapa</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
