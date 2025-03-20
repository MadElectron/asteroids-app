"use client";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Aside from "@/app/components/Aside";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { RouteChangeListener } from "@/app/components/RouteChangeListener";
import UserAvatar from "@/app/components/UserAvatar";
import Notifications from "@/app/components/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function BackofficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <RouteChangeListener />
      <Notifications />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar position="static" sx={{ px: 3 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <TravelExploreIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Backoffice
              </Typography>
            </Box>
            <UserAvatar />
          </Toolbar>
        </AppBar>

        <Box sx={{ display: "flex", flex: 1, mt: 4 }}>
          <Aside open={drawerOpen} onClose={handleDrawerToggle} />

          <Box component="main" sx={{ flex: 1, p: 3, overflow: "auto" }}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
