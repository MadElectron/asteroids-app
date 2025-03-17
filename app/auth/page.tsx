"use client";

import { Card, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { useAuthStore } from "@/app/store/auth";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function Page() {
  const router = useRouter();
  // const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (data: AuthData) => {
    const loggedIn = await useAuthStore.getState().login(data);

    if (loggedIn) {
      router.push("/backoffice/users");
    } else {
      enqueueSnackbar("Неверный логин или пароль", { variant: "error" });
    }
  };

  return (
    <Card sx={{ p: 5, textAlign: "center" }}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <Typography variant="h5">Авторизация</Typography>
      <AuthForm onSubmit={handleSubmit} />
    </Card>
  );
}
