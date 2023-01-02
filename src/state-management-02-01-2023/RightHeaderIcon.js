import Box from "@mui/material/Box";

import ShippingCartIconComponent from "./ShippingCartIconComponent";

const RightHeaderIcons = ({ cartCount }) => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <ShippingCartIconComponent cartCount={cartCount} />
    </Box>
  );
};

export default RightHeaderIcons;
