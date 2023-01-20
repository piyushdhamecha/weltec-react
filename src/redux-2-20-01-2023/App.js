import * as React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import {useDispatch} from 'react-redux'

import Header from "./Header";

const App = () => {
  const dispatch = useDispatch()

  const handleCartCount = () => {
    dispatch({ type: "INCREMENT"});
  };

  const handleAddItem = () => {
    dispatch({ type: "ADD"});
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box margin="10px 0 0 0">
        <Button onClick={handleCartCount} variant="contained">
          Add to cart
        </Button>
        <Button onClick={handleAddItem} variant="contained">
          Add to item
        </Button>
      </Box>
    </Box>
  );
};

export default App;
