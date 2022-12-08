import React from "react";
import BaseInput from "./BaseInput";

const Input = React.forwardRef((props, ref) => {
  console.log(ref);
  return <BaseInput ref={ref} />;
});

export default Input;
