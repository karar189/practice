import React from "react";

const DisplayCard = (props) => {
  return (
    <div>
      <br />
      My Name is : {props.name}
      <br />
      My Email ID is : {props.email}
    </div>
  );
};

export default DisplayCard;
