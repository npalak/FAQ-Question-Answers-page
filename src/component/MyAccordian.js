import React, { useState } from "react";
import "./MyAccordian.scss";
import { BiPlusCircle } from "react-icons/bi";
const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="my-container">
        <div className="myaccordian">
          <p className="plus">
            <BiPlusCircle
              size={30}
              onClick={() => {
                setShow(!show);
              }}
            />
          </p>

          <h1>{question}</h1>
        </div>
        {show && <p className="answers">{answer}</p>}
      </div>
    </>
  );
};
export default MyAccordian;
