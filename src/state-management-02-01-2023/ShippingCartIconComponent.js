import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShippingCartIconComponent = ({ cartCount }) => {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={cartCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default ShippingCartIconComponent;
