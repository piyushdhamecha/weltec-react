import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import RightPanel from "./RightPanel";

const Header = ({ cartCount }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Header
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <RightPanel cartCount={cartCount} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
