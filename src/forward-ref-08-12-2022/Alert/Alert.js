import { StyledContainer } from "./AlertStyled";

const Alert = (props) => {
  console.log(props.children);
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Alert;
