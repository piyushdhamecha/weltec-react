import React from "react";

const Message = (props) => {
  console.log("Message called for " + props.name);
  return <p>{props.message}</p>;
};

export default React.memo(Message);
