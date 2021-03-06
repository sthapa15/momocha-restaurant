import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palate" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_apps flex__center">
        <p className="app__specialMenu-menu_heading">Appetizers</p>
        <div className="app__specialMenu-menu_items">
          {data.apps.map((app, index) => (
            <MenuItem key={app.title + index} title={app.title} price={app.price} tags={app.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_entrees flex__center">
        <p className="app__specialMenu-menu_heading">Entrees</p>
        <div className="app__specialMenu-menu_items">
          {data.entrees.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
