"use client";

import PageTitle from "@/app/components/PageTitle";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { slug } = params;

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
    </>
  );
}
