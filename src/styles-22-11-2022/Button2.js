import buttonStyle from "./Button2.module.css";

const Button = ({ className, onClick, label }) => {
  console.log(buttonStyle);
  return (
    <button
      className={className !== undefined ? className : buttonStyle.primary}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
