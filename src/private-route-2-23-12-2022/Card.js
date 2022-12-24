const Card = (props) => {
  console.log(props);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "7px",
        margin: "5px 0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
