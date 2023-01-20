import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import RightHeaderIcons from "./RightHeaderIcon";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Mobiles
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <RightHeaderIcons />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
