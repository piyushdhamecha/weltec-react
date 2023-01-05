import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  let newState;

  if (action.type === "INCREMENT") {
    newState = { count: state.count + 1 };
  }

  return newState;
};

const App = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Stack alignItems="center">
      <Stack margin="20px 0" fontSize="20px">
        {state.count}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          // onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </Stack>
    </Stack>
  );
};

export default App;
