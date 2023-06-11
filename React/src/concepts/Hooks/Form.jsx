//creating a form using usestate and displaying it in some other component.
import React, { useState } from "react";
import DisplayCard from "../../component/DisplayCard";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    console.log(name);
    console.log(email);
    // setName(name);
    // setEmail(email);
  };

  return (
    <>
      <h2> Basic Form</h2>
      <form action="">
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <a onClick={submitHandler}>Submit</a>
      </form>

      {/* Now we will pass the name and state as props to child element display */}
      <DisplayCard name={name} email={email} />
    </>
  );
};

export default Form;
