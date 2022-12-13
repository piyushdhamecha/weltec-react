import { useRef } from "react";

const BasicForms = () => {
  const input1Ref = useRef();
  const input2Ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      input1: input1Ref.current.value,
      input2: input2Ref.current.value,
    });

    // console.log(e.target.elements.usernameInput1.value);
    // console.log(e.target.elements.usernameInput2.value);
    // console.log(document.getElementById("usernameInput").value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput2">Username 2:</label>
        <input id="usernameInput2" type="text" ref={input2Ref} />
      </div>
      <div>
        <label htmlFor="usernameInput1">Username 1:</label>
        <input id="usernameInput1" type="text" ref={input1Ref} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForms;
