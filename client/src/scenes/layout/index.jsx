import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "state/api";

const Layout = () => {
  const isAboveMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box width="100%" height="100%" display={isAboveMobile ? "flex" : "block"}>
      {/* If the data is undefined,send the {} */}
      <Sidebar
        user={data || {}}
        isAboveMobile={isAboveMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* let the left part is occupied by the navbar */}
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
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
