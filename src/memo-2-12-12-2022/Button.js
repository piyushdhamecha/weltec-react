import { memo } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default memo(Button);
