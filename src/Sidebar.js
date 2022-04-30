import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import background from "./background.jpg";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt={""} />
        <Avatar className="sidebar__avatar" />
        <h2>Chris Analikwu</h2>
        <h4>chris@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p> <p className="sidebar__statNumber">1500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p> <p className="sidebar__statNumber">1800</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("nodejs")}
        {recentItem("javascript")}
        {recentItem("graphql")}
        {recentItem("mongoDB")}
      </div>
    </div>
  );
}

export default Sidebar;
