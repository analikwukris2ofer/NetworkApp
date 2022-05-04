import { Info } from "@material-ui/icons";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import "./Widgets.css";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Chris is king", "Breaking News")}
      {newsArticle("Oil prices on high", "Breaking News")}
      {newsArticle("Crypto prices fall", "Breaking News")}
      {newsArticle("Crude oil exports on high", "Breaking News")}
      {newsArticle("Gas prices on high", "Breaking News")}
    </div>
  );
}

export default Widgets;
