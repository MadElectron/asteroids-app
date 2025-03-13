import { Typography } from "@mui/material";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h5" sx={{ mb: 1 }}>
      {children}
    </Typography>
  );
}
