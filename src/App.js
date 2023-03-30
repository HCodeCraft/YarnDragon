import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Yarns from "./Yarns";
import NewYarnForm from "./NewYarnForm";
import NavBar from "./NavBar";
import YarnDetails from "./YarnDetails";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yarns" element={<Yarns />} />
        <Route path="/yarns/new" element={<NewYarnForm />} />
        <Route path="yarns/:id" element={<YarnDetails />} />
      </Routes>
    </>
  );
}

export default App;
