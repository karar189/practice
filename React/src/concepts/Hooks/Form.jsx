//creating a form using usestate and displaying it in some other component.
import React, { useState } from "react";
import DisplayCard from "../../component/DisplayCard";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    alert("Form Submitted");
    setSubmitted(true);
  };

  return (
    <>
      <h2> Basic Form</h2>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          label="name"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>

      {/* Now we will pass the name and state as props to child element display */}
      {submitted && <DisplayCard name={name} email={email} />}
    </>
  );
};

export default Form;
