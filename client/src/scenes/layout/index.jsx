import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isAboveMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box width="100%" height="100%" display={isAboveMobile ? "flex" : "block"}>
      <Sidebar
        isAboveMobile={isAboveMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* display all the children in the element layout */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
