import Box from "@mui/material/Box";
import PersonIconComponent from "./PersonIconComponent";

import ShippingCartIconComponent from "./ShippingCartIconComponent";

const RightHeaderIcons = () => {
  console.log("RightHeaderIcons rerendered");
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <ShippingCartIconComponent />
      <PersonIconComponent />
    </Box>
  );
};

export default RightHeaderIcons;
