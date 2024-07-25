import React from "react";
import "../Styles/text.css";
function Text(props) {
  return (
    <div className="content">
      <img
        className="content-img"
        src={require(`../Images/${props.item.image}`)}
        alt="destnation"
      ></img>
      <div className="content-text">
        <div className="main">
          <i class="fa-solid fa-location-dot"></i>
          {props.item.location}
          <a href={props.item.googleUrl}>View on Google maps</a>
        </div>
        <h1 className="place">{props.item.title}</h1>
        <p className="dates">
          {props.item.startdate} - {props.item.enddate}{" "}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
export default Text;
