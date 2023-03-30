import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyConsumer } from "./Context";

const NewYarnForm = () => {
  const [yarnsState, setYarnsState] = useState({
    name: "",
    image: "",
    colorway: "",
    weight: "",
    composition: "",
    amount: "",
    plans: "",
    origin: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/yarns")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setYarnsState({
          name: data.name,
          image: data.image,
          colorway: data.colorway,
          weight: data.weight,
          composition: data.composition,
          amount: data.amount,
          plans: data.plans,
          origin: data.origin,
        });
      });
  }, []);

  return (
    <MyConsumer>
      {(context) => {
        const handleChange = (e) => {
          setYarnsState({
            ...yarnsState,
            [e.target.name]: e.target.value,
          });
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          const newYarn = {
            name: yarnsState.name,
            image: yarnsState.image,
            colorway: yarnsState.colorway,
            weight: yarnsState.weight,
            composition: yarnsState.composition,
            amount: yarnsState.amount,
            plans: yarnsState.plans,
            origin: yarnsState.origin,
          };

          fetch("http://localhost:3001/yarns", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newYarn),
          })
            .then((r) => r.json())
            .then((data) => {
              console.log(data);
              context.addYarn(data);
              context.showAllYarns();
              navigate("/yarns");
            });
        };

        return (
          <div className="yarnform">
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <label>Yarn name:</label>
              <input name="name" onChange={handleChange} type="text" /> <br />
              <br />
              <label>Image url:</label>
              <input name="image" onChange={handleChange} type="text" /> <br />
              <br />
              <label>Colorway:</label>
              <input name="colorway" onChange={handleChange} type="text" />{" "}
              <br />
              <br />
              <label>Weight:</label>
              <select name="weight" onChange={handleChange}>
                <option value=""></option>
                <option value="Lace">Lace</option>
                <option value="Sock">Sock</option>
                <option value="Light DK/Sport">Light DK/Sport</option>
                <option value="DK/Light Worsted">DK/Light Worsted</option>
                <option value="Worsted">Worsted</option>
                <option value="Bulky/Chunky">Bulky/Chunky</option>
                <option value="Super Bulky">Super Bulky</option>
              </select>
              <br />
              <br />
              <label>Composition:</label>
              <input
                name="composition"
                onChange={handleChange}
                type="text"
              />{" "}
              <br />
              <br />
              <label>Amount:</label>
              <input name="amount" onChange={handleChange} type="text" /> <br />
              <br />
              <label>Plans:</label>
              <textarea name="plans" onChange={handleChange} type="text" />{" "}
              <br />
              <br />
              <label>Origin:</label>
              <input name="origin" onChange={handleChange} type="text" /> <br />
              <br />
              <input type="submit" />
            </form>
          </div>
        );
      }}
    </MyConsumer>
  );
};

export default NewYarnForm;
