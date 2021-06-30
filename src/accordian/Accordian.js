import React, { useState } from "react";
import { questions } from "../api";
import "./Accordian.scss";
import MyAccordian from "../component/MyAccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-wrapper">
        <h1 style={{ marginLeft: "200px" }}>
          React Interview questions and answers:
        </h1>
        {data.map((element) => {
          const { id } = element;
          return <MyAccordian key={id} {...element} />;
        })}
      </section>
    </>
  );
};
export default Accordian;
