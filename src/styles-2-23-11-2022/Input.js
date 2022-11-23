import inputStyles from "./Input.module.css";

const Input = () => {
  console.log(inputStyles);
  return (
    <input
      className={inputStyles.primary}
      type="text"
      style={{ backgroundColor: "red" }}
    />
  );
};

export default Input;
