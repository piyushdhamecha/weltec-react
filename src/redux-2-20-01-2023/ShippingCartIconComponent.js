import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {useSelector} from 'react-redux'

const ShippingCartIconComponent = () => {
  const count = useSelector((state) => state.count)
  console.log({count})

  return (
    <IconButton  ton size="large" aria-label="show 4 new mails" color="inherit">
      <Badge badgeContent={count} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default ShippingCartIconComponent;
