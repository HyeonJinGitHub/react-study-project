import React, { memo, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component, DeeperComponent } from "./component/chapter1/src1_3";

function App() {
  const [, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="App">
      <Component counter={100} />
      <DeeperComponent counter={{ counter: 100 }} />
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
