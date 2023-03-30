import React from "react";
import Yarn from "./Yarn";
import "./Yarn.css";
import { MyConsumer } from "./Context";

const Yarns = () => {
  // const yarnList = context.yarnsState.map((yarn) => (

  return (
    <MyConsumer>
      {(context) => {
        const yarnList = context.filterYarns.map((yarn) => (
          <Yarn
            name={yarn.name}
            image={yarn.image}
            body={yarn.colorway}
            compositon={yarn.composition}
            key={yarn.name}
            weight={yarn.weight}
            id={yarn.id}
          />
        ));

        return (
          <>
            <div className="top-bar">
              <h1 className="title">My Yarns</h1>
              <div className="yarnfilter">
                <h4>
                  <label>Filter yarn weight:</label>
                </h4>
                <select onChange={context.changeFilter} name="weight">
                  <option value="All">All</option>
                  <option value="Lace">Lace</option>
                  <option value="Sock">Sock</option>
                  <option value="Light DK/Sport">Light DK/Sport</option>
                  <option value="DK/Light Worsted">DK/Light Worsted</option>
                  <option value="Worsted">Worsted</option>
                  <option value="Bulky/Chunky">Bulky/Chunky</option>
                  <option value="Super Bulky">Super Bulky</option>
                </select>
              </div>
            </div>
            <div className="yarn-box">
              {yarnList}
              <br />
            </div>
          </>
        );
      }}
    </MyConsumer>
  );
};

export default Yarns;
