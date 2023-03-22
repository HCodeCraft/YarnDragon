import React from "react";
import YarnLink from "./YarnLink";
import { Link, useOutletContext } from "react-router-dom";

const Yarn = ({ name, image, body, weight, id }) => {
  console.log("yarn id", id);

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{name}</h3>
          <br />
        </div>
        <div className="card-body">
          <p>Colorway: {body}</p>
          <br />
          <p>Weight: {weight}</p>
        </div>

        <div className="btn">
          <Link to={`${id}`}>
            <button>Show notes/plans</button>
          </Link>
          {/* <YarnLink id={id}/> */}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Yarn;
