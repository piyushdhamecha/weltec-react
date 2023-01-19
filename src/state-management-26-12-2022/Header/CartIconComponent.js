import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIconComponent = ({ cartCount }) => {
  console.log(window.localState)
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={cartCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIconComponent;
