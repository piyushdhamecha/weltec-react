import styled from "styled-components";

export const InputStyle = styled.input`
  border-color: blue;
  border-radius: 2px;
  background-color: red;

  ${(props) =>
    props.variant === "primary" ? " background-color:yellow; " : ""}
`;

const name = "Piyush";

console.log(`Hi, my name is ${name}`);
