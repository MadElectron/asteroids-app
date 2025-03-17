"use client";

import PageTitle from "@/app/components/PageTitle";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useUserStore from "@/app/store/users";
import UserForm from "@/app/components/UserForm";

export default function Page() {
  const router = useRouter();
  const store = useUserStore();
  const [user] = useState<User | null>(null);

  const handleSubmit = (user: User) => {
    store.addUser(user);
    router.push("/backoffice/users");
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
      <PageTitle>Добавить пользователя</PageTitle>
      <UserForm user={user as User} onSubmit={handleSubmit} />
    </>
  );
}
