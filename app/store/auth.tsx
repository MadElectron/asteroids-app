"use client";

import { create } from "zustand";
import users from "@/app/mock/users";
import { createSession, destroySession } from "@/app/utils/session";

interface AuthState {
  user: User | null;
  setUser: () => void;
  login: (data: AuthData) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: () => {
    const email = localStorage.getItem("user");
    const user = users.find((u) => u.email === email);

    set({ user });
  },
  login: async (data: AuthData) => {
    /**
     * Emulating API call
     */
    const user = users.find((u) => u.email === data.username);
    const authSuccess = !!user && data.password === "1111";

    if (authSuccess) {
      await createSession(user.id);
      set({ user });
      localStorage.setItem("user", user.email);
    }

    return authSuccess;
  },
  logout: () => {
    localStorage.removeItem("user");
    destroySession();
  },
}));
