import { useCallback, useMemo, useState } from "react";
import Message from "./Message";

const App = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const grossSalary = 50000;

  const calculateSalary = (baseSalary) => {
    // console.log("Calulate salary called");
    const tax = 1000;

    return baseSalary - tax;
  };

  const netSalary = useMemo(() => calculateSalary(grossSalary), [grossSalary]);
  //   console.log(netSalary);
  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <Message message={input} name="Input 1" />
        <input type="text" value={input2} onChange={handleChange2} />
        <Message message={input2} name="Input 2" />
      </div>
      {/* {netSalary} */}
    </div>
  );
};

export default App;
