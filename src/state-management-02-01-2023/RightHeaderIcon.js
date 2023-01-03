import Box from "@mui/material/Box";

import ShippingCartIconComponent from "./ShippingCartIconComponent";

const RightHeaderIcons = () => {
  console.log("RightHeaderIcons rerendered");
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <ShippingCartIconComponent />
    </Box>
  );
};

export default RightHeaderIcons;
