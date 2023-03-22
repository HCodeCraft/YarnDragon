import React, { useState, useEffect } from "react";
import Yarn from "./Yarn";
import "./Yarn.css";
import NewYarnButton from "./NewYarnButton";
import { MyConsumer } from "./Context";

const Yarns = () => {
  return (
    <MyConsumer>
      {(context) => {
        const yarnList = context.yarnsState.map((yarn) => (
          <Yarn
            name={yarn.name}
            image={yarn.image}
            body={yarn.colorway}
            key={yarn.name}
            weight={yarn.weight}
            id={yarn.id}
          />
        ));

        return (
            <>
            <h1 class="title">My Yarns</h1>
          <div class="yarn-box">
            
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
