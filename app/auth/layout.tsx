"use client";

import { Box } from "@mui/material";
import { RouteChangeListener } from "@/app/components/RouteChangeListener";
import Notifications from "@/app/components/Notifications";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RouteChangeListener />
      <Notifications />
      <Box
        id="wrapper"
        component="div"
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </>
  );
}
