import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        {/* display all the children in the element layout */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
