import React from "react";
import "./Trip.css";

function Trips(props) {
  return (
    <div className="trip-content">
      <img src={props.image} alt={props.title} className="trip-image" />
      <div className="trip-info">
        <p className="location">
          📍{props.country} <a href="#">View on Google Maps</a>
        </p>
        <h2 className="trip-title">{props.name}</h2>
        <p className="trip-date">{props.dates}</p>
        <p className="trip-description">
          hi hello this is {props.name} purshuing Btech in seshadri Rao
          Gudlavalleru Engineering college,Intreseted in learning the{" "}
          {props.course}.
        </p>
      </div>
    </div>
  );
}

export default Trips;
