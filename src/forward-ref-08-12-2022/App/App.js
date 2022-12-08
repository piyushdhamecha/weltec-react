import React, { useEffect, useRef } from "react";
import Alert from "../Alert";
import Input from "../Input";

import { StyledContainer } from "./AppStyled";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledContainer>
      <Input ref={inputRef} value="Piyush" />
      <Alert>
        <Input />
      </Alert>
    </StyledContainer>
  );
};

export default App;
