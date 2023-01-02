import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Header from "./Header";

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartCount = () => {
    // setCartCount(cartCount + 1);
    cartCount = cartCount + 1;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header cartCount={cartCount} />
      <Box margin="10px 0 0 0">
        <Button onClick={handleCartCount} variant="contained">
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default App;
