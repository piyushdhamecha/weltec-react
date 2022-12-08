import React from "react";

const BaseInput = React.forwardRef((props, ref) => {
  console.log(ref);
  return <input type="text" ref={ref} />;
});

export default BaseInput;
