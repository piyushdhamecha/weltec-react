import * as React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Header from "./Header";
import { CartCountContext } from "./CartCountContext";

const App = () => {
  console.log("App rerendered");
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <CartCountContext.Provider value={cartCount}>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box margin="10px 0 0 0">
          <Button onClick={handleCartCount} variant="contained">
            Add to cart
          </Button>
        </Box>
      </Box>
    </CartCountContext.Provider>
  );
};

export default App;
