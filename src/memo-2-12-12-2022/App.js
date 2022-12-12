import { useCallback, useMemo, useState } from "react";
import Button from "./Button";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleChange1 = (e) => setInput1(e.target.value);
  const handleChange2 = (e) => setInput2(e.target.value);

  const leaves = useMemo(() => {
    console.log("calculateLeaves rendered");
    return 100 - input3;
  }, [input3]);

  const handleInput1Click = useCallback(() => {
    // alert("Input 1 button clicked");
    const newMessage = input1 + " clicked";
  }, [input1]);

  const handleInput2Click = useCallback(() => {
    alert("Input 1 button clicked");
  }, []);

  const handleChange3 = (e) => {
    setInput3(e.target.value);
  };

  //   console.log(typeof leaves);
  //   const leaves = calculateLeaves();

  return (
    <div>
      <input type="text" value={input1} onChange={handleChange1} />

      <Button
        label="Button 1"
        onClick={handleInput1Click}
        messageFor="Input 1"
      />

      <input type="text" value={input2} onChange={handleChange2} />
      <Button
        label="Button 2"
        onClick={handleInput2Click}
        messageFor="Input 2"
      />
      <input type="number" value={input3} onChange={handleChange3} />
      <p>{leaves}</p>
    </div>
  );
};

export default App;
