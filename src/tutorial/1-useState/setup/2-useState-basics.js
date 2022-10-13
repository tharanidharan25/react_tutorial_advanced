// IMPORTING USE STATE
// NOTE: USE STATE IS A NAMED EXPORT SO USE {}
// HOOKS WILL ALWAYS START WITH 'use'
// COMPONENT MUST ALWAYS START WITH UPPERCASE LETTER
// HOOKS MUST BE IN A FUNCTION/COMPONENT BODY
// CANNOT CALL CONDITIONALLY
import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello World");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
