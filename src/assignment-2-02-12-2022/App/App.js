import { useState } from "react";
import { StyledContainer } from "./AppStyled";
import Header from "./Header";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState();

  const handleButtonClick = (input) => {
    debugger;
    setIsLoading(true);

    fetch(`https://api.agify.io/?name=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      });
  };

  const renderContent = () => {
    console.log("render content called");
    if (isLoading) {
      return "Loading...";
    }

    if (apiData === undefined) {
      return null;
    }

    return (
      <ul>
        <li>Name: {apiData.name}</li>
        <li>Age: {apiData.age}</li>
        <li>Count: {apiData.count}</li>
      </ul>
    );
  };

  return (
    <StyledContainer>
      <Header onButtonClick={handleButtonClick} />
      {renderContent()}
    </StyledContainer>
  );
};

export default App;
