"use client";

import PageTitle from "@/app/components/PageTitle";
import { Button } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useUserStore from "@/app/store/users";
import UserForm from "@/app/components/UserForm";
import { useAppStore } from "@/app/store/app";

export default function Page() {
  const router = useRouter();
  const store = useUserStore();
  const { slug } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const { notify } = useAppStore();

  useEffect(() => {
    const user = store.users.find((u) => u.id === Number(slug)) as User;
    setUser(user);
  }, [slug, store.users]);

  const handleSubmit = (user: User) => {
    store.editUser(user);
    router.push("/backoffice/users");

    notify({
      message: `Пользователь {ID: ${user.id}} успешно сохранён`,
      variant: "success",
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          router.push("/backoffice/users");
        }}
      >
        К списку пользователей
      </Button>
      <PageTitle>Редактировать пользователя ID: {slug}</PageTitle>
      <UserForm user={user as User} onSubmit={handleSubmit} />
    </>
  );
}
