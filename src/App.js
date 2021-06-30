import "./App.scss";
import Accordian from "./accordian/Accordian";
import React from "react";

const App = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <Accordian />
        </div>
      </div>
    </>
  );
};
export default App;
