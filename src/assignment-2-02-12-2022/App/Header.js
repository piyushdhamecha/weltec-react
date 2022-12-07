import { useState } from "react";
import Input from "../Input";
import { StyledInputContainer } from "./AppStyled";

const Header = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    debugger;
    props.onButtonClick(input);
  };

  return (
    <StyledInputContainer>
      <Input value={input} onChange={handleChange} />
      <button onClick={handleButtonClick}>Get details</button>
    </StyledInputContainer>
  );
};

export default Header;
