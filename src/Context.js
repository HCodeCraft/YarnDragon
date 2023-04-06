import React, { useState, useEffect } from "react";

const MyContext = React.createContext();

const MyProvider = (props) => {
  const [yarnsState, setYarnsState] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/yarns")
      .then((res) => res.json())
      .then((data) => {
        setYarnsState(data);
      });
  }, []);

  const addYarn = (yarn) => {
    setYarnsState([...yarnsState, yarn]);
  };

  const deleteYarn = (id) => {
    const newYarnList = yarnsState.filter((yarn) => yarn.id !== id);
    setYarnsState(newYarnList);
  };

  const showAllYarns = () => {
    setFilter("All");
  };

  const changeFilter = (event) => setFilter(event.target.value);

  const filterYarns = yarnsState.filter(
    (yarn) => yarn.weight === filter || filter === "All"
  );

  return (
    <MyContext.Provider
      value={{
        yarnsState: yarnsState,
        setYarnsState: setYarnsState,
        addYarn: addYarn,
        changeFilter: changeFilter,
        filterYarns: filterYarns,
        showAllYarns: showAllYarns,
        deleteYarn: deleteYarn,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
