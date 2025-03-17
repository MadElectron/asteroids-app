"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/app/store/auth";

export function RouteChangeListener() {
  const router = useRouter();
  const isAuthPage = usePathname() === "/auth";
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token && !isAuthPage) {
      router.push("/auth");
    } else if (token) {
      if (isAuthPage) {
        router.push("/backoffice/users");
      } else if (!user) {
        setUser();
      }
    }
  });

  return <></>;
}
