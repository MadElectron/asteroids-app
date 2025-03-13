"use client";

import {
  AppBar,
  Box,
  // Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Aside from "@/app/components/Aside";

export default function BackofficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar position="static" sx={{ px: 3 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, height: "20px" }}
          >
            Header
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flex: 1 }}>
        <Aside />

        <Box component="main" sx={{ flex: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
