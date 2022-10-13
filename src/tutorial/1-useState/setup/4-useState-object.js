import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "Random message",
  });
  // INSTEAD OF USING OBJECT WE CAN ALSO USE MANY useState WITH STRINGS
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random Message");
  const changeMessage = () => {
    // WHEN CHANGING OBJECT ALWAYS USE SPREAD OPERATOR ELSE EVERYTHING WILL BE REPLACED
    // setPerson({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };
  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> 
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
      */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
