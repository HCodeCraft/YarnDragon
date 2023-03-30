import React from "react";
import Lotsyarn from "./orgyarn.jpg";

const Home = () => {
  return (
    <div class="content">
      <div className="Home">
        <h1 class="welcome">Welcome to Yarn Dragon!</h1>

        <img
          class="homeimg"
          src={Lotsyarn}
          alt="an image of lots of organized yarn"
        />
        <h2>
          A place to organize your yarn hoard for maximum crafting enjoyment!
        </h2>
      </div>
    </div>
  );
};

export default Home;
