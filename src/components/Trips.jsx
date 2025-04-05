import React from "react";
import PropTypes from "prop-types";
import "./Trip.css";
function Trips(props) {
  console.log(props);
  return (
    <div className="trip-content">
      <img src={props.image} alt={props.title} className="trip-image" />
      <div className="trip-info">
        <p className="location">
          📍{props.country} <a href="#">View on Google Maps</a>
        </p>
        <h2 className="trip-title">{props.title}</h2>
        <p className="trip-date">{props.dates}</p>
        <p className="trip-description">
          Hi, I'm {props.name} from {props.city}. I'm currently pursuing my
          B.Tech at Seshadri Rao Gudlavalleru Engineering College. I have a
          strong interest in learning new technologies and enhancing my skills,
          "I'm passionate and have a keen interest in {props.course}."
        </p>
      </div>
    </div>
  );
}
Trips.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  dates: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  course: PropTypes.string,
};

Trips.default = {
  title: "Reactprep",
  country: "india",
  dates: 0,
  name: "admin",
  city: "admin - city",
  course: "admin - course",
};
export default Trips;
