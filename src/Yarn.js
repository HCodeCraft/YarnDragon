import React from "react";
import { Link } from "react-router-dom";
import { MyConsumer } from "./Context";

// name, image, body, weight, id

const Yarn = (props) => {
  return (
    <MyConsumer>
      {(context) => {
        const yarn = context.yarnsState.find((y) => y.id === props.id);

        return (
          <div className="card-container">
            <div className="image-container">
              <img src={yarn.image} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{yarn.name}</h3>
                <br />
              </div>
              <div className="card-body">
                <p>Colorway: {yarn.colorway}</p>
                <br />
                <p>Weight: {yarn.weight}</p>
              </div>
              <br />

              <div className="btn">
                <Link to={`${yarn.id}`}>
                  <button>Show notes/plans</button>
                </Link>
                <br />
                <br />
              </div>
            </div>
          </div>
        );
      }}
    </MyConsumer>
  );
};

export default Yarn;
