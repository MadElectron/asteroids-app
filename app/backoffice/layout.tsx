"use client";

import {
  AppBar,
  Box,
  // Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Aside from "@/app/components/Aside";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function BackofficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar
        position="static"
        sx={{ px: 3, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <TravelExploreIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Backoffice
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flex: 1, mt: 4 }}>
        <Aside />

        <Box component="main" sx={{ flex: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
