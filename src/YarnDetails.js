import React from "react";
import { MyConsumer } from "./Context";
import { useParams, useNavigate } from "react-router-dom";

const YarnDetails = (props) => {
  console.log("YarnDetails' props id", props);

  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <MyConsumer>
      {(context) => {
        const handleDelete = (id) => {
          fetch(`http://localhost:3001/yarns/${id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                console.log("It was deleted!");
              }
            })
            .then(() => {
              const updatedYarns = context.yarnsState.filter((y) => y.id !=id)
              console.log("updatedYarns", updatedYarns)
              context.setYarnsState(updatedYarns)
              // context.showAllYarns();
              // context.deleteYarn(data)
            
              navigate("/yarns");
            });
        };

        const yarn = context.yarnsState.find((y) => y.id == id);

        return (
          <div>
            <h1 className="title">{yarn.name}</h1>
            <div className="content">
              <img id="yarnpic" src={yarn.image} alt="yarn image" />
            </div>
            <div>
              <div className="text">
                <h2>Colorway: </h2> <p> {yarn.colorway}</p>
              </div>

              <div className="text">
                <h2>Weight: </h2> <p>{yarn.weight} </p>
              </div>
              <div className="text">
                <h2>Composition: </h2> <p>{yarn.composition} </p>
              </div>
              <div className="text">
                <h2>Amount: </h2> <p>{yarn.amount}</p>
              </div>
              <div className="text">
                <h2>Origin: </h2> <p>{yarn.origin}</p>
              </div>
              <div className="text">
                <h2>Plans:</h2> <p>{yarn.plans}</p>
              </div>
              <div className="text">
                <button onClick={() => handleDelete(id)}>Delete Yarn</button>
              </div>
              <br />
              <br />
            </div>
          </div>
        );
      }}
    </MyConsumer>
  );
};

export default YarnDetails;
