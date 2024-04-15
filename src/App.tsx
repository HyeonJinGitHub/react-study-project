import React, { memo, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "./component/chapter1/src1_5";

function App() {
  const [, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
