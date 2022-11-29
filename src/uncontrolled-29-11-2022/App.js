import { useRef, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  console.log(input);

  const handleButtonClick = () => {
    alert(input);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        type="text"
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default App;
