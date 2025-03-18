"use client";

import { Backdrop, CircularProgress } from "@mui/material";
import { useAppStore } from "@/app/store/app";

export default function Loader() {
  const { loading } = useAppStore();

  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
