import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { FlexBetween } from "./FlexBetween";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open sidebar")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween backgroundColor></FlexBetween>
        </FlexBetween>
        {/* Right Side */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
