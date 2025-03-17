import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function AuthForm({
  onSubmit,
}: {
  onSubmit: (data: AuthData) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    onSubmit({ username, password });
  };

  return (
    <Box component="form" onSubmit={submit}>
      <TextField
        required
        label="Логин (e-mail)"
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        required
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
      >
        Login
      </Button>
    </Box>
  );
}
