import React from "react";

const DisplayCard = (props) => {
  return (
    <div>
      <br />
      My Name is : {props.name}
      <br />
      My Email is : {props.email}
    </div>
  );
};

export default DisplayCard;
