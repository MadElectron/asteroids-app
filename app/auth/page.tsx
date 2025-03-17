"use client";

import { Card, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import AuthForm from "@/app/components/AuthForm";
import { useAuthStore } from "@/app/store/auth";

export default function Page() {
  const router = useRouter();

  const handleSubmit = async (data: AuthData) => {
    const loggedIn = await useAuthStore.getState().login(data);

    if (loggedIn) {
      router.push("/backoffice/users");
    } else {
      /**
       * @todo add notification
       */
      alert("Неправильный логин или пароль");
    }
  };

  return (
    <Card sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h5">Авторизация</Typography>
      <AuthForm onSubmit={handleSubmit} />
    </Card>
  );
}
