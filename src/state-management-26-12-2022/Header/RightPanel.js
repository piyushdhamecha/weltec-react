import {
  Badge,
  Box,
  IconButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

import React from "react";
import CartIconComponent from "./CartIconComponent";

const RightPanel = ({ cartCount }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <CartIconComponent cartCount={cartCount} />
    </Box>
  );
};

export default RightPanel;
