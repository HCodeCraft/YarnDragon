import React from "react";
import Lotsyarn from "./orgyarn.jpg";

const Home = () => {
  return (
    <div className="content">
      <div className="Home">
        <h1 className="welcome">Welcome to Yarn Dragon!</h1>

        <img className="homeimg" src={Lotsyarn} alt="lots of organized yarn" />
        <h2>
          A place to organize your yarn hoard for maximum crafting enjoyment!
        </h2>
      </div>
    </div>
  );
};

export default Home;
